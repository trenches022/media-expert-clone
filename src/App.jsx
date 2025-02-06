import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import Cart from "./Components/Cart/Cart";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Smartphones from "./Components/ProductList/Smartphones/Smartphones";
import Laptops from "./Components/ProductList/Laptops/Laptops";
import Gaming from "./Components/ProductList/Gaming/Gaming";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/smartphones" element={<Smartphones />} />
              <Route path="/laptops" element={<Laptops />} />
              <Route path="/gaming" element={<Gaming />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
