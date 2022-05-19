import ProductPage from '../src/views/Product';
import OneProductPage from '../src/views/OneProduct';
import Cart from '../Containers/views/Cart';
import Login from '../Containers/views/Login';
import Register from '../Containers/views/Register';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Route exact path="/">
        <Redirect to="/Home" /> */}
      {/* </Route>  */}
      <Route path="/Products" component={ProductPage} />
      <Route path="/Product" component={OneProductPage} />
    </BrowserRouter>
  );
};

export default Router;
