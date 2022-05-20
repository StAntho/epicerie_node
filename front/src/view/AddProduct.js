import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import axios from "axios";
import "../css/addproduct.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  // const navigate = useNavigate();

  const addProductAction = () => {
    if (name.length === 0 || price.length === 0 || img.length === 0) {
      alert("Empty form");
      return;
    }

    let data = {
      name: name,
      price: parseInt(price),
      img: img,
    };

    axios
      .post("http://127.0.0.1:3000/products/", data)
      .then((response) => {
        // let obj = response.data;
        // navigate("/products");
        window.location.reload(false);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <a onclick={AddProduct} className="addproduct-button">
        Ajouter un produit
      </a>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        method="post"
      >
        <h1 class="h3 mb-3 font-weight-normal">Ajouter produit</h1>

        <label for="Name">Name</label>
        <input
          type="text"
          placeholder="Nom du produit"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          class="form-control"
        ></input>
        <label for="price">Prix</label>
        <input
          type="number"
          placeholder="Prix du produit"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          class="form-control"
        ></input>

        <label for="img">Image</label>
        <input
          type="text"
          placeholder="lien de l'image"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
          class="form-control"
        ></input>
        <button onClick={addProductAction} class="btn btn-lg btn-primary">
          Ajouter le produit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
