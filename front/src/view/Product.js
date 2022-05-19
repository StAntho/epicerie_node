import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ReactDOM from "react-dom";
import { QRCodeSVG } from "qrcode.react";

import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  let history = useNavigate();

  useEffect(() => {
    // call api or anything
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    //login ==> localStorage.setItem('token', token);
    //let token = localStorage.getItem("token");

    axios
      .get("http://127.0.0.1:3000/products")
      .then((response) => {
        let obj = response.data;
        console.log(obj.product);
        setProducts(obj.product);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const redirectToOneProduct = (productId) => {
    history.push({ pathname: "./OneProduct", state: { productId: productId } });
  };

  return (
    <div className="product list">
      <ul>
        {products.map((product) => (
          <li onClick={redirectToOneProduct(product._id)}>
            {product.name}, {product.price}€ <img src={product.img} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
