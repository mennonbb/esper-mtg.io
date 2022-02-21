import { styled } from "@material-ui/core";

export const CardsContainer = styled("div")`
  display: grid;
  box-shadow: 0px 5px 4px rgba(5, 0, 0, 0.05);
  grid-template-columns: 227px, 1fr;
  grid-template-rows: repeat(4, auto);
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(3)};
  align-items: center;
  grid-template-areas:
    "image name"
    "image cost"
    "image type"
    "image  description";
`;

export const CardsName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
`;

export const CardsDescription = styled("div")`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const CardsCost = styled("div")`
  grid-area: cost;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const CardsType = styled("div")`
  grid-area: type;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const CardsImage = styled("img")`
  grid-area: image;
  margin: 10px;
  width: 100%;
  height: initial;
`;
