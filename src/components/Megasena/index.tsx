import "./index.css";
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import { NomeLoteria } from "../NomeLoteria/NomeLoteria";
import { Estimativa } from "../Estimativa/Estimativa";
import { LotoFacilEstimativaValor } from "../LotoFacilEstimativaValor/LotoFacilEstimativaValor";
import { DezenasBolas } from "../DezenasBolas/DezenasBolas";
import { Acumulou } from "../Acumulou/Acumulou";
import { NumeroConcurso } from "../NumeroConcurso/NumedoConcurso";

export default function Megasena() {
  const { megasena } = useLoteria();

  return (
    <div className="mega-bloco-principal">
      <div>
        <div className="mega-bloco-loteria">
          <NomeLoteria image={trevo} name="MEGA-SENA" />
        </div>
        <div className="mega-bloco-estimativa">
          <div className="mega-texto-estimativa">
            <Estimativa dataProximoConcurso={megasena.dataProximoConcurso} />
          </div>
          <div className="mega-valor-estimativa">
            <LotoFacilEstimativaValor
              valorEstimadoProximoConcurso={
                megasena.valorEstimadoProximoConcurso
              }
            />
          </div>
        </div>
      </div>
      <div className="mega-bloco-direita">
        <div className="mega-linha-bola">
          <DezenasBolas dezenas={megasena.dezenas} />
        </div>
        <div className="mega-texto-acumulou">
          <Acumulou quantidadeGanhadores={megasena.quantidadeGanhadores} />
        </div>
        <div className="mega-data-concurso">
          <NumeroConcurso
            number={megasena.numeroDoConcurso}
            date={megasena.dataPorExtenso}
          />
        </div>
      </div>
    </div>
  );
}
