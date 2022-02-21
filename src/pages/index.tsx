import {
  ElementsContainer,
  CardsPaper,
  PageCardsContainer,
} from "@styles/pages/index.style";
import CardsInformation from "ui/components/data-display/CardsInformation/CardsInformation";
import { Typography, Container } from "@material-ui/core";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const { validCard, searchCards, error, cards, search, loading, showMore } =
    useIndex();

  return (
    <>
      <div>
        <Container>
          <ElementsContainer>
            {error && <Typography color={"error"}>{error}</Typography>}
          </ElementsContainer>
          <CardsPaper>
            {searchCards &&
              (cards.length > 0 ? (
                <PageCardsContainer>
                  <CardsInformation
                    image={
                      "https://repositorio.sbrauble.com/arquivos/in/magic/476308/5f4244270fa5e-6qhivw-fgpxzq-a5bfc9e07964f8dddeb95fc584cd965d.jpg"
                    }
                    name={"Aminatou, a Forjadora de Destinos"}
                    cost={3}
                    cardType={"Planeswalker Lendário"}
                    cardSubtype={"Aminatou"}
                    description={
                      "+1: Compre um card. Em seguida, coloque um card de sua mão no topo de seu grimório. -1: Exile outra permanente alvo sua. Em segida, devolva-a ao campo de batalha sob o seu controle. -6: Escolha esquerda ou direita. Cada jogador ganha o controle de todas as permanentes que não sejam terrenos, exceto Aminatou, a Forjadora de destinos, controladas pelo próximo jogador no sentido escolhido. Aminatou, a Forjadora de Destinos pode ser sua comandante."
                    }
                    colors={"Branco, Azul, Preto"}
                  />

                  <CardsInformation
                    image={
                      "https://repositorio.sbrauble.com/arquivos/in/magic/476308/5f4244270fa5e-6qhivw-fgpxzq-a5bfc9e07964f8dddeb95fc584cd965d.jpg"
                    }
                    name={"Aminatou, a Forjadora de Destinos"}
                    cost={3}
                    cardType={"Planeswalker Lendário"}
                    cardSubtype={"Aminatou"}
                    description={
                      "+1: Compre um card. Em seguida, coloque um card de sua mão no topo de seu grimório. -1: Exile outra permanente alvo sua. Em segida, devolva-a ao campo de batalha sob o seu controle. -6: Escolha esquerda ou direita. Cada jogador ganha o controle de todas as permanentes que não sejam terrenos, exceto Aminatou, a Forjadora de destinos, controladas pelo próximo jogador no sentido escolhido. Aminatou, a Forjadora de Destinos pode ser sua comandante."
                    }
                    colors={"Branco, Azul, Preto"}
                  />
                  <CardsInformation
                    image={
                      "https://repositorio.sbrauble.com/arquivos/in/magic/476308/5f4244270fa5e-6qhivw-fgpxzq-a5bfc9e07964f8dddeb95fc584cd965d.jpg"
                    }
                    name={"Aminatou, a Forjadora de Destinos"}
                    cost={3}
                    cardType={"Planeswalker Lendário"}
                    cardSubtype={"Aminatou"}
                    description={
                      "+1: Compre um card. Em seguida, coloque um card de sua mão no topo de seu grimório. -1: Exile outra permanente alvo sua. Em segida, devolva-a ao campo de batalha sob o seu controle. -6: Escolha esquerda ou direita. Cada jogador ganha o controle de todas as permanentes que não sejam terrenos, exceto Aminatou, a Forjadora de destinos, controladas pelo próximo jogador no sentido escolhido. Aminatou, a Forjadora de Destinos pode ser sua comandante."
                    }
                    colors={"Branco, Azul, Preto"}
                  />

                  <CardsInformation
                    image={
                      "https://repositorio.sbrauble.com/arquivos/in/magic/476308/5f4244270fa5e-6qhivw-fgpxzq-a5bfc9e07964f8dddeb95fc584cd965d.jpg"
                    }
                    name={"Aminatou, a Forjadora de Destinos"}
                    cost={3}
                    cardType={"Planeswalker Lendário"}
                    cardSubtype={"Aminatou"}
                    description={
                      "+1: Compre um card. Em seguida, coloque um card de sua mão no topo de seu grimório. -1: Exile outra permanente alvo sua. Em segida, devolva-a ao campo de batalha sob o seu controle. -6: Escolha esquerda ou direita. Cada jogador ganha o controle de todas as permanentes que não sejam terrenos, exceto Aminatou, a Forjadora de destinos, controladas pelo próximo jogador no sentido escolhido. Aminatou, a Forjadora de Destinos pode ser sua comandante."
                    }
                    colors={"Branco, Azul, Preto"}
                  />
                </PageCardsContainer>
              ) : (
                <Typography color={"error"}>Nenhum Card Encontrado</Typography>
              ))}
          </CardsPaper>
        </Container>
      </div>
    </>
  );
}
