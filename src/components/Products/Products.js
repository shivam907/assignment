"use client";
import React from "react";
import styles from "./styles.module.css";
import Menu from "./Menu";
import Product from "./Product";
import Data from "@/data/products.json";

const Products = () => {
  const [grid, setGrid] = React.useState(1);
  const [filter, setFilter] = React.useState({
    label: "Featured",
    value: "Featured",
  });
  const [sortedProducts, setSortedProducts] = React.useState([...Data]);

  React.useEffect(() => {
    let sortedData = [...Data];
    if (filter.value === "Price Low - High") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (filter.value === "Price High - Low") {
      sortedData.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sortedData);
  }, [filter]);

  return (
    <>
      <Menu
        filter={filter}
        setFilter={setFilter}
        grid={grid}
        setGrid={setGrid}
      />
      <div
        className={`${styles.products} ${
          grid == 1 ? styles.grid4 : styles.grid3
        }`}
      >
        {sortedProducts.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
