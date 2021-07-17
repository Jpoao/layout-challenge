import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Product from "./pages/Product";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Catalog">
          <Product />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
