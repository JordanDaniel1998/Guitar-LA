import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db.js";

export const useCart = () => {
  const initialProducts = () => {
    const localStorageProducts = localStorage.getItem("products");
    return localStorageProducts ? JSON.parse(localStorageProducts) : [];
  };
  const [data, setData] = useState(db);
  const [products, setProducts] = useState(initialProducts);
  const MAX_ITEMS = 10;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function addToProducts(item) {
    const itemExists = products.findIndex((e) => e.id === item.id);
    if (itemExists >= 0) {
      const updateProducts = [...products];
      updateProducts[itemExists].quantity++;
      setProducts(updateProducts);
    } else {
      item.quantity = 1;
      setProducts([...products, item]);
    }
  }

  function deleteProduct(id) {
    const newProducts = products.filter((item) => {
      return item.id !== id;
    });
    setProducts(newProducts);
  }

  function incrementProduct(id) {
    const updateProduct = products.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        item.quantity++;
      }
      return item;
    });

    setProducts(updateProduct);
  }

  function decrementProduct(id) {
    const updateProduct = products.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        item.quantity--;
      }
      return item;
    });

    setProducts(updateProduct);
  }

  function emptyProducts() {
    setProducts([]);
  }

  const isEmpty = useMemo(() => products.length === 0, [products]);

  const productsTotal = () =>
    products.reduce((total, item) => total + item.price * item.quantity, 0);

  return {
    data,
    products,
    isEmpty,
    productsTotal,
    addToProducts,
    incrementProduct,
    decrementProduct,
    deleteProduct,
    emptyProducts,
  };
};
