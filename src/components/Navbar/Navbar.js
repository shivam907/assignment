"use client";
import React from "react";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
const Navbar = () => {
  const cartItems = useSelector((state) => {
    console.log(state.cart.items);
    return state.cart.items;
  });
  const totalQuantity = cartItems.length;
  return (
    <>
      <nav className={`${styles["navv"]}`}>
        <div className={styles.nav}>
          <Link href="/">
            <div className={styles.logo}>
              <img src="/logo.svg" alt="" />
            </div>
          </Link>
          <Link href="/cart">
            <div className={styles.cartContainer}>
              <img src="/cart.svg" alt="" />
              {totalQuantity > 0 && (
                <span className={styles.cartQuantity}>{totalQuantity}</span>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
