import React from "react";
import ScrollToTop from "../commont/ScrollToTop";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";

import { ROUTE } from "../../constant/router.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
const SubMenu = () => {
  const { SubMenu } = Menu;
  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const history = useHistory();
  function goHome() {
    history.push("/");
  }
  function goShopping() {
    history.push("/shop-product");
  }
  function goCart() {
    history.push("/cart");
  }
  function goAbout() {
    history.push("/about-us");
  }
  function goContact() {
    history.push("/contact");
  }
  function goWishlist() {
    history.push("/wish-list");
  }
  return (
    <Menu
      mode="inline"
      onOpenChange={onOpenChange}
      style={{ background: "#62d2a2", color: "white" }}
    >
      <SubMenu key="sub1" title="Menu">
        <Menu.Item key="1" onClick={goHome}>
          <ScrollToTop />
          Home
        </Menu.Item>
        <SubMenu key="sub3" title="Shop">
          <Menu.Item key="7" onClick={goShopping}>
            Shop Product
          </Menu.Item>
          <Menu.Item key="8" onClick={goCart}>
            Cart
          </Menu.Item>
          <Menu.Item key="9" onClick={goWishlist}>
            Wishlist
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="2" onClick={goAbout}>
          About Us
        </Menu.Item>
        <Menu.Item key="3" onClick={goContact}>
          Contact{" "}
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};
export default SubMenu;
