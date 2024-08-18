import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "@/features/cartSlice";
import styles from "./style.module.css";

const CartItem = ({ product }) => {
  const { id, img, name, description, price, quantity } = product;
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(id));
    }
  };
  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeItem(id));
  };
  return (
    <tr className={styles.cartItem}>
      <td className={styles.productInfo}>
        <div className={styles.img}>
          <img src={img} alt={name} className={styles.productImage} />
        </div>
        <div className={styles.productDetails}>
          <h3>{name}</h3>
          <p>{description}</p>
          <a href="#" className={styles.remove} onClick={handleRemove}>
            Remove
          </a>
        </div>
      </td>
      <td>₹ {price.toFixed(2)}</td>
      <td>
        <div className={styles.productQuantity}>
          <button className={styles.quantityBtn} onClick={handleDecrease}>
            −
          </button>
          <span>{quantity}</span>
          <button className={styles.quantityBtn} onClick={handleIncrease}>
            +
          </button>
        </div>
      </td>
      <td>₹ {(price * quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
