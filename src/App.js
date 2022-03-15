/** @format */

import "./style/style.scss";
import Header from "./component/layout/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ROUTE } from "./constant/router.js";

import Footer from "./component/layout/Footer";
import Login from "./pages/form/formLogin/Login";
import Register from "./pages/form/formRegister/Register";
import ListItem from "./pages/shop/ShopListItem/ListItem";
import ProductDetail from "./pages/productDetails/ProductDetails";
import AboutUs from "./pages/aboutUs/AboutUs.js";
import Contact from "./pages/contact/Contact";
import Checkout from "./pages/checkout/Checkout";
import Cart from "./pages/shop/Cart/Cart";
import WishList from "./pages/shop/wishlist/WishList";
import Account from "./pages/myAccount/Account";
import "./responsive/responsive.scss";
import Admin from "./pages/admin/admin";

function App() {
  return (
    <Switch>
      <PrivateRoute path={ROUTE.ADMIN}>
        <Admin />
      </PrivateRoute>
      <Route path={ROUTE.LOGIN} exact>
        <Header />
        <Login />
        <Footer />
      </Route>
      <Route path={ROUTE.HOME}>
        <Public />
      </Route>
    </Switch>
  );
}

function Public(params) {
  return (
    <>
      <Header />
      <Switch>
        <Route path={ROUTE.HOME} exact>
          <Home />
        </Route>
        <Route path={ROUTE.REGISTER} exact>
          <Register />
        </Route>
        <Route path={ROUTE.SHOPITEM} exact>
          <ListItem />
        </Route>
        <Route path={ROUTE.SHOPITEM + "/:id"} exact>
          <ProductDetail />
        </Route>
        <Route path={ROUTE.ABOUTUS} exact>
          <AboutUs />
        </Route>
        <Route path={ROUTE.CONTACT} exact>
          <Contact />
        </Route>
        <Route path={ROUTE.CHECKOUT} exact>
          <Checkout />
        </Route>
        <Route path={ROUTE.CART} exact>
          <Cart />
        </Route>
        <Route path={ROUTE.WISHLIST} exact>
          <WishList />
        </Route>
        <Route path={ROUTE.MYACCOUNT} exact>
          <Account />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

function PrivateRoute({ children, ...rest }) {
  const token = localStorage.getItem("accessToken");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default App;
