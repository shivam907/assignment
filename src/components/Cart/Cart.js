"use client";
import React from "react";
import CartItem from "./CartItem";
import styles from "./style.module.css";

const Cart = ({ products }) => {
  return (
    <div className={styles.cart}>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th className={styles.headerProduct}>Product</th>
            <th className={styles.headerPrice}>Price</th>
            <th className={styles.headerQuantity}>Quantity</th>
            <th className={styles.headerTotal}>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
