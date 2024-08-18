"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Link from "next/link";
import Cart from "@/components/Cart/Cart";
import Checkout from "@/components/Checkout/Checkout";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
export default function Page() {
  const products = useSelector((state) => state.cart.items);
  const [order, setOrder] = React.useState(false);
  return (
    <>
      {order ? (
        <div className={styles.order}>
          <div className={styles.content}>
            <img src="/success.gif" />
            <h1>Thank you for ordering!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              repellendus quod. Dolor impedit minus vitae!
            </p>
            <Link href="/">
              <button>CONTINUE SHOPPING</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <Header name="Shopping Cart" />
          {products.length > 0 ? (
            <div className={styles.container}>
              <Cart products={products} />
              <Checkout products={products} setOrder={setOrder} />
            </div>
          ) : (
            <div className={styles.emptyCartMessage}>
              <h2>Your cart is empty.</h2>
              <p>Looks like you haven't added anything to your cart yet.</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
