import useStore from "../../../store/useStore";

const Gaming = () => {

  const { products, addToCart, searchQuery } = useStore();

  const filteredProducts = products
    .filter((product) => product.category === 'gaming')
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
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
        ))
      ) : (
        <p className="no-results">Brak wyników dla {searchQuery}</p>
      )}
    </div>
  )
}

export default Gaming;