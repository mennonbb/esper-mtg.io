import { useState, useMemo } from "react";
import { ValidateCards } from "data/services/ValidateCard";
import { ApiServices } from "data/services/ApiServices";
import { CardsShortInterface } from "data/@types/CardsInterface";

export default function useApp() {
  const [cardName, setCardName] = useState(""),
    validCard = useMemo(() => {
      return ValidateCards.cardName(cardName);
    }, [cardName]),
    [search, setSearch] = useState(false),
    [error, setError] = useState(""),
    [cards, setCards] = useState([] as CardsShortInterface[]),
    [showMore, setShowMore] = useState(0),
    [loading, setLoading] = useState(false);

  async function searchCards(cardName: string) {
    setSearch(false);
    setLoading(true);
    setError("");

    try {
      const { data } = await ApiServices.get<{
        cards: CardsShortInterface[];
        quantityCards: number;
      }>("/final-da-url" + cardName.replace(/" "/g, "-"));
      setCards(data.cards);
      setShowMore(data.quantityCards);
      setSearch(true);
      setLoading(false);
    } catch (error) {
      setError("Card Não Encontrado!");
      setLoading(false);
    }
  }

  return {
    validCard,
    setCardName,
    searchCards,
    cardName,
    error,
    cards,
    search,
    loading,
    showMore,
  };
}
