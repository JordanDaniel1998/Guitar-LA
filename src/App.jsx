import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Guitarra from "./components/Guitarra.jsx";
import { db } from "./data/db.js";

function App() {
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

  return (
    <>
      <Header
        products={products}
        deleteProduct={deleteProduct}
        incrementProduct={incrementProduct}
        decrementProduct={decrementProduct}
        emptyProducts={emptyProducts}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colecciónaaaa</h2>

        <div className="row mt-5">
          {data.map((guitarra) => {
            return (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra}
                addToProducts={addToProducts}
              />
            );
          })}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
