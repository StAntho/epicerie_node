import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "../css/product.css";
import AddProduct from "./AddProduct";

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
      .then((response) => {
        let obj = response.data;
        console.log(obj.product);
        setProducts(obj.product);
      })
      .catch((error) => {
        alert(error);
      });
  };

  function redirectToReport(productId) {
    navigate("/product/" + productId, { state: { productId } }); // ??? I'm not sure if this is the right way
  }

  return (
    <div className="productList">
      {products.map((product, index) => (
        // if (index %2 = ) {

        // }
        <div className="productCart">
          <div className="leftImage">
            <h3 class="productHeader">{product.name}</h3>
            <p class="productPrice">{product.price} €</p>
            <img className="productImg" src={product.img} />
          </div>
          <div className="centerText">
            <p class="wrapText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              posuere massa condimentum arcu volutpat congue. Sed ut mollis
              augue. Quisque vel lobortis orci, sed dictum mi. Integer ut velit
              et lorem sagittis porttitor. Cras a aliquam purus, ut fermentum
              massa. Donec sed sodales neque. Donec sollicitudin aliquam
              ullamcorper. Cras cursus auctor rutrum. Nunc eu ante eget leo
              cursus dictum quis non urna. Quisque gravida, nibh non malesuada
              sodales, sapien dolor mattis massa, quis rutrum nisi nunc quis
              mauris. Cras ac felis sed quam posuere molestie. Maecenas
              convallis nibh non lacus feugiat, nec tempor arcu accumsan. Etiam
              faucibus elit est, et sollicitudin mi dignissim sed. Nulla lacinia
              molestie convallis. Pellentesque a porttitor ligula, id facilisis
              metus. Proin ornare sagittis dolor, ac accumsan dolor pulvinar
              quis. Fusce sit amet mi semper orci lobortis maximus quis non
              arcu. Mauris eleifend aliquet vulputate.
            </p>

            <a
              className="login-button product-seemore-button"
              onClick={() => {
                redirectToReport(product._id);
              }}
            >
              En savoir plus
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
