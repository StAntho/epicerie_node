import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import axios from "axios";

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
      <p>Votre produit:</p>
      <QRCodeSVG value={"http://192.168.0.14:3001/product/" + product._id} />
      <p>name: {product.name}</p>
      <p>prix: {product.price}€</p>
      <img src={product.img} />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK2SURBVO3BSY7kQAwEQQ9C//+yTx95SkBQqRcOzeIX1hjFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUa5eCgJ30mlS0KnckcSOpUuCd9J5YlijVKsUYo1ysWHqXxSEk5UuiS8SeWTkvBJxRqlWKMUa5SLlyXhDpU7ktCpnCShU3kiCXeovKlYoxRrlGKNcvHHqXRJ6FT+J8UapVijFGuUi/+MSpeETuUvK9YoxRqlWKNcvEzlTUk4SUKn0qk8ofKbFGuUYo1SrFEuPiwJP0mlS8JJEjqVkyT8ZsUapVijFGuU+IXBknCiMkmxRinWKMUa5eKhJHQqXRI6lTuScKLSJaFT6ZLQJaFTOUlCp3KShE6lS0Kn8kSxRinWKMUa5eJlKl0SOpUuCZ3KSRLuUHlC5SQJP6lYoxRrlGKNcvGQSpeEE5UuCSdJOFE5SUKnckcSOpUTlZ9UrFGKNUqxRrl4KAlPqDyRhE7ljiR0Kp3KSRJOVLokvKlYoxRrlGKNcvEylS4JJypdEjqVkyR0KicqJ0noVDqV36RYoxRrlGKNEr/whyXhCZUuCScqJ0noVE6S0Kk8UaxRijVKsUa5eCgJ30nlRKVLwkkSTlS6JJyodEnoVN5UrFGKNUqxRrn4MJVPSsKJyhMqXRK6JJyodEnoVL5TsUYp1ijFGuXiZUm4Q+U7JeEOlS4Jv0mxRinWKMUa5WKYJHQqn5SEE5U7VD6pWKMUa5RijXLxxyXhTUnoVLok3JGEE5UnijVKsUYp1igXL1N5k0qXhDuS0Kl0Kl0STpLQqXQqbyrWKMUapVijXHxYEr5TEjqVO1ROktCpnCThjiR0Kk8Ua5RijVKsUeIX1hjFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUb5B+TlDPgl8OB6AAAAAElFTkSuQmCC"
        alt="Red dot"
      />
    </div>
  );
};

export default OneProductPage;
