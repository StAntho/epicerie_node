import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import axios from "axios";

const OneProductPage = () => {
  const [product, setProduct] = useState([]);

  let location = useLocation();

  useEffect(() => {
    // call api or anything
    console.log("HELLO", location.state);
    const productId = location.state;
    getProduct(productId);
  }, []);

  const getProduct = productId => {
    //login ==> localStorage.setItem('token', token);
    //let token = localStorage.getItem("token");

    axios
      .get("http://127.0.0.1:3000/products/" + productId)
      .then(response => {
        let obj = response.data;
        console.log(obj.product);
        setProduct(obj.product);
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <div className="product show">
      <p>Votre produit:</p>
      <QRCodeSVG value={"http://192.168.0.14:3001/product/" + product._id} />
      <p>name: {product.name}</p>
      <p>prix: {product.price}€</p>
      <img src={product.img} />
    </div>
  );
};

export default OneProductPage;
