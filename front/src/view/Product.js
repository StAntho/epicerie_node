import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    // call api or anything
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    //login ==> localStorage.setItem('token', token);
    //let token = localStorage.getItem("token");

    axios
      .get("http://127.0.0.1:3000/products")
      .then(response => {
        let obj = response.data;
        console.log(obj.product);
        setProducts(obj.product);
      })
      .catch(error => {
        alert(error);
      });
  };

  function redirectToReport(productId) {
    navigate("/product/" + productId, { state: productId }); // ??? I'm not sure if this is the right way
  }

  return (
    <div className="product list">
      <ul>
        {products.map(product => (
          <li>
            {product.name}, {product.price}€ <img src={product.img} />
            <a
              onClick={() => {
                redirectToReport(product._id);
              }}
            >
              {product.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
