import "./index.css";
import trevo from "../../assets/trevo-lotofacil.png";
import { useLoteria } from "../../hooks";
import { NomeLoteria } from "../NomeLoteria/NomeLoteria";
import { Estimativa } from "../Estimativa/Estimativa";
import { LotoFacilEstimativaValor } from "../LotoFacilEstimativaValor/LotoFacilEstimativaValor";

export default function Lotofacil() {
  const { lotofacil } = useLoteria();
  const linha1: string[] = [],
    linha2: string[] = [],
    linha3: string[] = [];
  for (let i = 0; i < 5; i++) {
    linha1.push(lotofacil.dezenas[i]);
  }

  return (
    <div className="lotofacil-bloco-principal">
      <div>
        <div className="lotofacil-bloco-loteria">
          <NomeLoteria image={trevo} name="LOTOFÁCIL" />
        </div>
        <div className="lotofacil-bloco-estimativa">
          <div className="lotofacil-texto-estimativa">
            <Estimativa dataProximoConcurso={lotofacil.dataProximoConcurso} />
          </div>
          <div className="lotofacil-valor-estimativa">
            <LotoFacilEstimativaValor
              valorEstimadoProximoConcurso={
                lotofacil.valorEstimadoProximoConcurso
              }
            />
          </div>
        </div>
      </div>
      <div className="lotofacil-bloco-direita">
        <div className="lotofacil-linha-bola">
          {linha1.map((dezena) => (
            <div className="lotofacil-bola" key={dezena}>
              {dezena}
            </div>
          ))}
        </div>
        <div className="lotofacil-linha-bola">
          {linha2.map((dezena) => (
            <div className="lotofacil-bola" key={dezena}>
              {dezena}
            </div>
          ))}
        </div>
        <div className="lotofacil-linha-bola">
          {linha3.map((dezena) => (
            <div className="lotofacil-bola" key={dezena}>
              {dezena}
            </div>
          ))}
        </div>
        <div className="lotofacil-texto-acumulou">
          {lotofacil.quantidadeGanhadores === 0
            ? "ACUMULOU!"
            : `${lotofacil.quantidadeGanhadores} GANHADORES`}
        </div>
        <div className="lotofacil-data-concurso">
          {`Concurso ${lotofacil.numeroDoConcurso} - ${lotofacil.dataPorExtenso}`}
        </div>
      </div>
    </div>
  );
}
