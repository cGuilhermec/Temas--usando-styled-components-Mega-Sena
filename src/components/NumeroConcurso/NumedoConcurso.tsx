import React from "react";

interface NumeroConcursoProps {
  number: number;
  date: string;
}

export const NumeroConcurso: React.FC<NumeroConcursoProps> = ({
  number,
  date,
}) => {
  return (
    <div>
      Concurso {number} - {date}
    </div>
  );
};
