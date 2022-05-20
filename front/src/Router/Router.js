import App from "../App";
import OneProductPage from "../view/OneProduct";
import ProductPage from "../view/Product";
import Login from "../view/Login";
import HomePage from "../view/home";
import AddProduct from "../view/AddProduct";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:idProduct" element={<OneProductPage />} />

        {localStorage.getItem("token") ? (
          <Route path="/login" element={<ProductPage />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}

        <Route path="/addProductPage" element={<AddProduct />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Erreur 404</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
