import { ThemeProvider, Button, CircularProgress } from "@material-ui/core";
import Header from "../ui/components/surfaces/Header/Header";
import { AppContainer } from "../ui/styles/pages/_app.style";
import TextField from "ui/components/researches/TextField/TextField";
import theme from "../ui/themes/theme";
import Footer from "ui/components/surfaces/Footer/Footer";
import useApp from "data/hooks/pages/use_App.page";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  const {
    validCard,
    setCardName,
    searchCards,
    error,
    cards,
    search,
    loading,
    showMore,
    cardName,
  } = useApp();

  return (
    <>
      <head>
        <title>Esper</title>
      </head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header>
            <TextField
              label={"Procurar Card"}
              variant={"outlined"}
              value={cardName}
              onChange={(event) => setCardName(event.target.value)}
            />
            <Button
              variant={"contained"}
              sx={{ width: "150px", height: "55px", margin: "auto" }}
              disabled={!validCard || loading}
              color={"secondary"}
              onClick={() => searchCards(cardName)}
            >
              {loading ? <CircularProgress size={20} /> : "Procurar"}
            </Button>
          </Header>

          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
