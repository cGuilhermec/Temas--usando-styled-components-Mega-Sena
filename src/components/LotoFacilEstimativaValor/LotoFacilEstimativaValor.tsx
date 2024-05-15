interface LotofacilEstimativaValorProps {
  valorEstimadoProximoConcurso: number;
}

export const LotoFacilEstimativaValor: React.FC<
  LotofacilEstimativaValorProps
> = ({ valorEstimadoProximoConcurso }) => {
  return (
    <div>
      {valorEstimadoProximoConcurso.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
    </div>
  );
};
