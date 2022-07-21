import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
function App() {
  let products = [
    {
      name: "iphone 10x pro",
      price: 200,
      quantity: 0,
    },
    {
      name: "redmi note 10 pro",
      price: 60,
      quantity: 0,
    },
    {
      name: "Samsung Galaxy Note 12",
      price: 80,
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  return (
    <>
      <div className=" h-screen flex flex-col justify-between ">
        <Navbar />
        <main>
          <ProductList
            products={products}
            incrementQuantity={incrementQuantity}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
