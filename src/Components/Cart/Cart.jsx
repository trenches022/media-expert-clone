import useStore from "../../store/useStore";
import './Cart.css';

const Cart = () => {

  const { cart, removeFromCart } = useStore();

  return (
    <div className="cart">
      <h2>Koszyk</h2>
      {cart.length === 0 ? (
        <p>Twój koszyk jest pusty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>
              {item.discount
                ? (item.price * (1 - item.discount / 100)).toFixed(0)
                : item.price} zł
              </p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Usuń z koszyka</button>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart;