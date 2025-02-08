import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <Link to="/"><h1>Kategorie</h1></Link>
        <Link to='/'>Wszystkie kategorie</Link>
        <Link to='/smartphones'>Smartfony</Link>
        <Link to='/laptops'>Laptopy</Link>
        <Link to='/gaming'>Gaming</Link>
        <Link to='/tv'>Telewizory</Link>
      </nav>
    </div>
  )
}

export default Sidebar;