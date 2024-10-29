import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="opcoesNavegacao" to="/">Battles</Link>
      <Link className="opcoesNavegacao" to="/decks">Decks</Link>
      <Link className="opcoesNavegacao" to="/profile">Profile</Link>
      <Link id="store" className="opcoesNavegacao" to="/store">Store</Link>
    </nav>
  )
}

export default Navbar
