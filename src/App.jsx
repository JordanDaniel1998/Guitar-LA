import Header from "./components/Header.jsx";
import Guitarra from "./components/Guitarra.jsx";
import { useCart } from "./hooks/useCart.js";

function App() {
  const {
    data,
    products,
    isEmpty,
    productsTotal,
    addToProducts,
    incrementProduct,
    decrementProduct,
    deleteProduct,
    emptyProducts,
  } = useCart();

  return (
    <>
      <Header
        products={products}
        deleteProduct={deleteProduct}
        incrementProduct={incrementProduct}
        decrementProduct={decrementProduct}
        emptyProducts={emptyProducts}
        isEmpty={isEmpty}
        productsTotal={productsTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

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
