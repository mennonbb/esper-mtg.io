import { styled, TextField, Container } from "@material-ui/core";

export const TextFieldStyled = styled(TextField)`
  width: 800px;

  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.primary.light};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 1fr;
  }
`;

export const TextFieldContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;
