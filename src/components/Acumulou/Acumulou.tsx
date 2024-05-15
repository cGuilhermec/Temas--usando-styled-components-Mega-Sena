import React from "react";
import styled from "styled-components";

interface AcumulouProps {
  quantidadeGanhadores: number;
}

export const Acumulou: React.FC<AcumulouProps> = ({ quantidadeGanhadores }) => {
  return (
    <TextoAcumulouStyled>
      {quantidadeGanhadores === 0
        ? "ACUMULOU!"
        : `${quantidadeGanhadores} GANHADORES`}
    </TextoAcumulouStyled>
  );
};

const TextoAcumulouStyled = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.acumulou || "black"};
`;
