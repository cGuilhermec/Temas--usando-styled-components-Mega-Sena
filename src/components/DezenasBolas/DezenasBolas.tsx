import React from "react";
import styled from "styled-components";

interface DezenasBOlasProps {
  dezenas: string[];
}

export const DezenasBolas: React.FC<DezenasBOlasProps> = ({ dezenas }) => {
  return (
    <Linha>
      {dezenas.map((dezena: any) => (
        <Bola key={dezena}>{dezena}</Bola>
      ))}
    </Linha>
  );
};

const Bola = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bola || "gray"};
  color: ${(props) => props.theme.bolafonte || "white"};
  font-size: 1.2rem;
`;

const Linha = styled.div`
  display: flex;
  justify-content: space-betwen;
  flex-wrap: wrap;
  margin: 10px 0;
`;
