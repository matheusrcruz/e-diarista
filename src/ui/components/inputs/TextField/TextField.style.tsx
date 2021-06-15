import { experimentalStyled as styled } from "@material-ui/core/styles";

import { TextField } from "@material-ui/core";

export const TextFieldStyled = styled(TextField)`
  .MuiInputBaseRoot {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
  MuiOutLinedInput-notcheadOutline {
    background-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
