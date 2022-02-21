import React from "react";
import {
  StyledFooter,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Mennon Borges</FooterTitle>
          <Typography variant={'body1'} sx={{mt: 2}}>
            Esper é um conteúdo de fã não oficial permitido sob a política de
            conteúdo de fãs. Não aprovado/apoiado pela Wizards. Porções do
            material usado são propriedade da Wizards of the Coast. ©Wizards of
            the Coast LLC.
          </Typography>
        </Box>
        <Box>
          <FooterTitle>Baixe também os aplicativos!</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
          </AppList>
        </Box>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
