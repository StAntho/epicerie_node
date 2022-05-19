import React, { useState, useEffect } from 'react';
//import { useHistory } from "react-router-dom";
import axios from 'axios';

const OneProductPage = () => {
  const [product, setProduct] = useState([]);

  //let history = useHistory();

  useEffect(() => {
    // call api or anything
    getProduct();
  }, []);

  const getProduct = (productId) => {
    //login ==> localStorage.setItem('token', token);
    //let token = localStorage.getItem("token");

    axios
      .get('http://127.0.0.1:3000/product/' + productId)
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
      <ul>
        <li>
          {product.name}, {product.price} <img src={product.img} />
        </li>
      </ul>
    </div>
  );
};

export default OneProductPage;
