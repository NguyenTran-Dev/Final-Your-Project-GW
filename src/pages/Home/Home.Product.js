import React from "react";
import { Tabs, Button, Row } from "antd";
import ProductItem from "../../component/commont/ProductsItem";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTE } from "../../constant/router.js";
import ScrollToTop from "../../component/commont/ScrollToTop";
import { getListProductApi } from "../../redux/reducers/productSlice";

const Product = () => {
  const { TabPane } = Tabs;
  const { listProductApi } = useSelector((state) => state.listProduct);
  const [listProduct, setListProduct] = React.useState(listProductApi);

  const callAPI = (key) => {
    if (key === "1") {
      const list = listProductApi
        .filter((item, index) => {
          return item.type === "vegetables";
        })
        .sort((a, b) => {
          return b.rating - a.rating;
        })
        .slice(0, 6);
      setListProduct(list);
    }
    if (key === "2") {
      const list = listProductApi
        .filter((item, index) => {
          return item.type === "fruits";
        })
        .sort((a, b) => {
          return b.rating - a.rating;
        })
        .slice(0, 6);
      setListProduct(list);
    }
    if (key === "3") {
      const list = listProductApi
        .filter((item, index) => {
          return item.type === "juice";
        })
        .sort((a, b) => {
          return b.rating - a.rating;
        })
        .slice(0, 6);
      setListProduct(list);
    }
    if (key === "4") {
      const list = listProductApi
        .filter((item, index) => {
          return item.type === "meats";
        })
        .sort((a, b) => {
          return b.rating - a.rating;
        })
        .slice(0, 6);
      setListProduct(list);
    }
  };
  const renderListProduct = () => {
    return listProduct?.map((item, index) => {
      return <ProductItem key={index} {...item} />;
    });
  };

  return (
    <div className="container">
      <div className="product__heading">
        <h1 className="product__heading-h1">Our Products</h1>
      </div>

      <div className="product__item">
        <Tabs
          defaultActiveKey="1"
          onChange={callAPI}
          className="product__item-list"
        >
          <TabPane tab="Vegetable" key="1">
            <Row gutter={16} className="product__list">
              {renderListProduct()}
            </Row>
          </TabPane>
          <TabPane tab="Fruits" key="2">
            <Row gutter={16} className="product__list">
              {renderListProduct()}
            </Row>
          </TabPane>
          <TabPane tab="Juice" key="3">
            <Row gutter={16} className="product__list">
              {renderListProduct()}
            </Row>
          </TabPane>
          <TabPane tab="Meats" key="4">
            <Row gutter={16} className="product__list">
              {renderListProduct()}
            </Row>
          </TabPane>
        </Tabs>
      </div>

      <div className="product__button">
        <NavLink to={ROUTE.SHOPITEM} exact>
          <ScrollToTop />
          <Button className="product__button-btn">View more</Button>
        </NavLink>
      </div>
    </div>
  );
};
export default Product;
