import React, { Component } from "react";

import ReactDOM from "react-dom";
import { QRCodeSVG } from "qrcode.react";

class ProductPage extends React.Component {
  render() {
    return (
      <div>
        <p>Product Page</p>
        <QRCodeSVG value="https://reactjs.org/" />,
      </div>
    );
  }
}

export default ProductPage;
