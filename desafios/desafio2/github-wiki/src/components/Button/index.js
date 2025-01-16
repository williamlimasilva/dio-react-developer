import React from "react";

import { ButtonContainer } from "./styles";

function Button({ onClick, disabled }) {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      Buscar
    </ButtonContainer>
  );
}

export default Button;
