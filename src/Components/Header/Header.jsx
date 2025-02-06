import useStore from "../../store/useStore"; 
import logo from "../../images/header-logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  const { searchQuery, setSearchQuery, cart } = useStore(); 

  const cartItemCount = cart.length;

  return (
    <header>
      <div className="header-container">
        <Link to='/'><img src={logo} alt="logo" /></Link>
        <input 
          type="text" 
          placeholder="Wyszukaj w sklepie" 
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
        <Link to='/cart' className="cart-container">
          <i className="fa-solid fa-cart-shopping" id="cart-btn"></i>
          {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </Link>
      </div>
    </header>
  );
}

export default Header;
