import { AppBar, styled, Typography, Container } from "@material-ui/core";

export const HeaderApp = styled(AppBar)`
  display: flex;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 100px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const HeaderLogo = styled("img")`
  height: 25px;
  gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 40px;
  }
`;

export const HeaderTitle = styled((props) => (
  <Typography component={"h1"} variant={"body1"} {...props} />
))`
  font-weight: bold;
`;
