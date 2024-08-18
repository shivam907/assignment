"use client";
import React from "react";
import styles from "./styles.module.css";
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { clearCart } from "@/features/cartSlice";
const Checkout = ({ products, setOrder }) => {
  const dispatch = useDispatch();
  const [promoCode, setPromoCode] = React.useState(false);
  const code = React.useRef(null);
  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const promoCodeHandler = () => {
    if (code.current.value == "SHIVAM10") {
      setPromoCode(true);
      toast.success("Promo Code Applied Successfully", {
        position: "bottom-left",
      });
    } else {
      toast.error("Promo Code Not Available", {
        position: "bottom-left",
      });
    }
  };
  const handleCheckout = () => {
    dispatch(clearCart());
    console.log("order placed");
    setOrder(true);
  };
  return (
    <div className={styles.checkout}>
      <h1 className={styles.checkoutHeading}>Checkout</h1>
      <div className={styles.cart}>
        {products.map((product) => (
          <div className={styles.cartItem}>
            <div className={styles.productInfo}>
              <div className={styles.img}>
                <img
                  src={product.img}
                  alt={product.name}
                  className={styles.productImage}
                />
                <span className={styles.cartQuantity}>{product.quantity}</span>
              </div>
              <div className={styles.productDetails}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
            <div>₹ {(product.price * product.quantity).toFixed(2)}</div>
          </div>
        ))}
        <div>
          <div className={styles.discount}>
            <input ref={code} type="text" placeholder="Discount Code" />
            <button onClick={promoCodeHandler}>Apply</button>
          </div>
          {promoCode ? (
            <div className={styles.promoCode}>
              <img src="/code.png" alt="" />
              <p>SHIVAM10</p>
              <CloseIcon
                onClick={() => setPromoCode(false)}
                className={styles.icon}
              />
            </div>
          ) : (
            <p className={styles.code}>
              Apply code <span>SHIVAM10</span> to get 10% off
            </p>
          )}
        </div>
        {promoCode && (
          <div className={styles.coupon}>
            <h3>Promo Code:</h3>
            <h3>- ₹{((10 * total) / 100).toFixed(2)}</h3>
          </div>
        )}
        <div className={styles.cartTotal}>
          <h3>Total:</h3>
          <h3>₹ {(total - (promoCode ? (10 * total) / 100 : 0)).toFixed(2)}</h3>
        </div>
      </div>
      <button onClick={handleCheckout} className={styles.checkoutBtn}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
