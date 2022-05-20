import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import axios from "axios";

import "../css/oneproduct.css";

const OneProductPage = () => {
  const [product, setProduct] = useState([]);

  let location = useLocation();
  const { idProduct: id } = useParams();

  useEffect(() => {
    console.log("id", id);
    const productId = location.state?.productId || id;
    getProduct(productId);
  }, []);

  const getProduct = (productId) => {
    //login ==> localStorage.setItem('token', token);
    //let token = localStorage.getItem("token");

    console.log();
    axios
      .get("http://127.0.0.1:3000/products/" + productId)
      .then((response) => {
        let obj = response.data;
        console.log(obj.product);
        setProduct(obj.product);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="product show">
      <p className="productname">Nom du produit : {product.name}</p>
      <div className="oneproduct-img">
        <img src={product.img} />
      </div>
      <p className="productprice">Prix du produit : {product.price}€</p>
      <QRCodeSVG value={"http://192.168.0.14:3001/product/" + product._id} />
    </div>
  );
};

export default OneProductPage;
