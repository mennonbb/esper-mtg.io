import useApp from "data/hooks/pages/use_App.page";

export default function useIndex() {
  const {
    validCard,
    setCardName,
    searchCards,
    error,
    cards,
    search,
    loading,
    showMore,
  } = useApp();

  return {
    validCard,
    setCardName,
    searchCards,
    error,
    cards,
    search,
    loading,
    showMore,
  };
}
