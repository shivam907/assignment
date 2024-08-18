"use client";
import React from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "@/features/cartSlice";
const Product = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: Math.random(),
        name: props.name,
        description: props.description,
        price: props.price,
        img: props.img,
      })
    );
    toast.success("Successfully added to cart", {
      position: "bottom-left",
    });
  };
  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.content}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div className={styles.cart}>
          <h2>₹ {props.price}</h2>
          <button onClick={handleAddToCart}>
            <p>Add to Cart</p>
            <img src="/cart.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
