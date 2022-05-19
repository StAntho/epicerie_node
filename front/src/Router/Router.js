import ProductPage from "../view/Product";
import OneProductPage from "../view/OneProduct";
import { BrowserRouter, Route, Navigate } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Route exact path="/">
        <Navigate o="/" />
      </Route> */}
      <Route path="/" component={ProductPage} />
      <Route path="/Product" component={OneProductPage} />
    </BrowserRouter>
  );
};

export default Router;
