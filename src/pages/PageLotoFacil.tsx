import Lotofacil from "../components/Lotofacil";
import { useLoteria } from "../hooks";
import "./index.css";

export default function PageLoto() {
  const { megasena } = useLoteria();

  return (
    <>
      {megasena.dataApuracao ? (
        <div className="principal-bloco">
          <Lotofacil />
        </div>
      ) : (
        <div className="principal-carregando">
          <h3>Carregando...</h3>
        </div>
      )}
    </>
  );
}
