import { NomeLoteriaProps } from "../../interfaces/NomeLoteriaProps";

export const NomeLoteria = ({ image, name }: NomeLoteriaProps) => {
  return (
    <div className="mega-bloco-loteria">
      <img src={image} alt="" />
      <span className="mega-nome-loteria">{name}</span>
    </div>
  );
};
