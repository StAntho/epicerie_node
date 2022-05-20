import React, { useState, useEffect } from 'react';
import '../css/home.css';
import img from '../assets/market.jpg';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="home">
      <div className="leftImage">
        <h1 class="productHeader">Flash ton épicerie</h1>
        <h3 class="productHeader">Nos services</h3>
        <div className="services">
          <img src={img} />
          <div className="info">
            <p>
              Avec notre solution simple, vous bénéficirez de l'ensemble de nos
              services:
            </p>
            <ul>
              <li>Un accès sécurisé à votre profil</li>
              <li>Un back office de gestion</li>
              <li>L'ajout et la modification de votre catalogue de produits</li>
              <li>Impression de QRcode lié au produit de votre choix</li>
            </ul>
          </div>
        </div>
        <h3 class="productHeader">Comment ça marche ?</h3>
      </div>
      <div className="howWork">
        <img src="https://coindegeek.com/wp-content/uploads/2020/12/application-de-qr-code.jpg" />
        <p>
          Créer vos propre QRCode pour présenter vos produits non référencés
        </p>
      </div>
    </div>
  );
};

export default HomePage;
