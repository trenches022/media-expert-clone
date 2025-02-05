import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <Link to="/">Smartfony</Link>
      </nav>
    </div>
  )
}

export default Sidebar;