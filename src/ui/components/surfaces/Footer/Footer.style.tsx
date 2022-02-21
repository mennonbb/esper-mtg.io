import { styled, Typography, Container } from "@material-ui/core";

export const StyledFooter = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({ theme }) => theme.spacing(5)};
  margin-top: auto;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const AppList = styled("ul")`
  list-style-type: none;
  display: flex;
  padding: 0;
  gap: ${({ theme }) => theme.spacing(1)};

  img {
    width: 122px;
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body1"} {...props} />
))`
  font-weight: bold;
`;
