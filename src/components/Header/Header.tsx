import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
  return (
    <header className="container">
      <Link className="link link-time" to="/timemania">
        TIMEMANIA
      </Link>
      <Link className="link link-mega" to="/mega-sena">
        MEGA-SENA
      </Link>
      <Link className="link link-quina" to="/quina">
        QUINA
      </Link>
    </header>
  );
}
