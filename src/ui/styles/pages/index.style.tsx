import { styled, Paper } from "@material-ui/core";

export const ElementsContainer = styled("div")`
  display: flex;
  background-color: ${({ theme }) => theme.palette.primary.main};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const CardsPaper = styled(Paper)`
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
  padding: 0 auto ${({ theme }) => theme.spacing(10)};
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const PageCardsContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
