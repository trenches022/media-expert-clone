import logo from "../../images/header-logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to='/'><img src={logo} alt="logo" /></Link>
        <input type="text" placeholder="Wyszukaj w sklepie" className="search-input"/>
        <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
        <Link to='/cart'><i className="fa-solid fa-cart-shopping" id="cart-btn"></i></Link>
      </div>
    </header>
  )
}

export default Header;