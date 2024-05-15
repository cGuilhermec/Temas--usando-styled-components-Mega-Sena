import "./index.css";
import trevo from "../../assets/trevo-quina.png";
import { useLoteria } from "../../hooks";
import { NomeLoteria } from "../NomeLoteria/NomeLoteria";
import { Estimativa } from "../Estimativa/Estimativa";
import { LotoFacilEstimativaValor } from "../LotoFacilEstimativaValor/LotoFacilEstimativaValor";

export default function TimeMania() {
  const { timemania } = useLoteria();

  return (
    <div className="mega-bloco-principal">
      <div>
        <div className="mega-bloco-loteria">
          <NomeLoteria image={trevo} name="TIMEMANIA" />
        </div>
        <div className="mega-bloco-estimativa">
          <div className="mega-texto-estimativa">
            <Estimativa dataProximoConcurso={timemania.dataProximoConcurso} />
          </div>
          <div className="mega-valor-estimativa">
            <LotoFacilEstimativaValor
              valorEstimadoProximoConcurso={
                timemania.valorEstimadoProximoConcurso
              }
            />
          </div>
        </div>
      </div>
      <div className="mega-bloco-direita">
        <div className="mega-linha-bola">
          {timemania.dezenas.map((dezena) => (
            <div className="mega-bola" key={dezena}>
              {dezena}
            </div>
          ))}
        </div>
        <div className="mega-texto-acumulou">
          {timemania.quantidadeGanhadores === 0
            ? "ACUMULOU!"
            : `${timemania.quantidadeGanhadores} GANHADORES`}
        </div>
        <div className="mega-data-concurso">
          {`Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`}
        </div>
      </div>
    </div>
  );
}
