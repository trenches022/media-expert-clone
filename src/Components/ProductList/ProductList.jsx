import useStore from "../../store/useStore";
import './ProductList.css';

const ProductList = () => {
  const { products, addToCart } = useStore();

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-content">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <div className="price">
                Cena:{" "}
                {product.discount ? (
                  <>
                    <span className="original-price">{product.price} zł</span>
                    <span className="discounted-price">
                      {(product.price * (1 - product.discount / 100)).toFixed(0)} zł
                    </span>
                  </>
                ) : (
                  <span className="final-price">{product.price} zł</span>
                )}
              </div>
              <button onClick={() => addToCart(product)} className="add-to-cart-btn">Do koszyka</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
