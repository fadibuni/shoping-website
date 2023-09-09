import "./checkout.styles.scss";
import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";
import { useContext } from "react";
import CheckoutItem from "../../checkout-item/checkout-item.component";
const Checkout = () => {
  const { cartItems, cartTotal } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <h1>I am the Checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
        <span className="total">Total: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default Checkout;