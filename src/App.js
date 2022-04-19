import './style/style.scss';
import Header from './component/layout/Header';
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTE } from './constant/router.js';

import Footer from './component/layout/Footer';
import Login from './pages/form/formLogin/Login';
import Register from './pages/form/formRegister/Register';
import ListItem from './pages/shop/ShopListItem/ListItem';
import ProductDetail from './pages/productDetails/ProductDetails';
import AboutUs from './pages/aboutUs/AboutUs.js';
import Contact from './pages/contact/Contact';
import Checkout from './pages/checkout/Checkout';
import Cart from './pages/shop/Cart/Cart';
import WishList from './pages/shop/wishlist/WishList';
import Account from './pages/myAccount/Account';
import './responsive/responsive.scss';
import Admin from './pages/admin/admin';
import Notfound from './pages/notFound/NotFound';

const user = JSON.parse(localStorage.getItem('inforUser'));
function App() {
  return (
    <Switch>
      <Route path={ROUTE.HOME} exact>
        <Header />
        <Home />
        <Footer />
      </Route>
      <Route path={ROUTE.LOGIN}>
        <Header />
        <Login />
        <Footer />
      </Route>
      <Route path={ROUTE.REGISTER}>
        <Header />
        <Register />
        <Footer />
      </Route>
      <PrivateRoute path={ROUTE.ADMIN}>
        <Admin />
      </PrivateRoute>
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
        <Route path={ROUTE.SHOPITEM} exact>
          <ListItem />
        </Route>
        <Route path={ROUTE.SHOPITEM + '/:id'} exact>
          <ProductDetail />
        </Route>
        <Route path={ROUTE.ABOUTUS}>
          <AboutUs />
        </Route>
        <Route path={ROUTE.CONTACT}>
          <Contact />
        </Route>
        <Route path={ROUTE.CHECKOUT}>
          <Checkout />
        </Route>
        <Route path={ROUTE.CART}>
          <Cart />
        </Route>
        <Route path={ROUTE.WISHLIST}>
          <WishList />
        </Route>
        <Route path={ROUTE.MYACCOUNT}>
          <Account />
        </Route>
        <Route path='*'>
          <Notfound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

function PrivateRoute({ children, ...rest }) {
  const token = localStorage.getItem('accessToken');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default App;
