import React from "react";
import styled from "styled-components";

interface EstimativaProps {
  dataProximoConcurso: string;
}

export const Estimativa: React.FC<EstimativaProps> = ({
  dataProximoConcurso,
}) => {
  return (
    <Card>
      Estimativa de prêmio do próximo concurso. Sorteio em {dataProximoConcurso}
      :
    </Card>
  );
};

const Card = styled.div``;
