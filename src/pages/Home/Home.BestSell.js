import React from "react";
import { Row, Col } from "antd";
import SellList from "../../component/commont/SellList";
const BestSell = () => {
  return (
    <div className="container">
      <Row>
        <Col lg={{ span: 16 }} xs={{ span: 24 }}>
          <div>
            <img
              width="100%"
              src="Images/banner/best-sellers.png"
              alt="Banner image"
            />
          </div>
        </Col>

        <Col lg={{ span: 8 }} xs={{ span: 24 }}>
          <div className="sell">
            <div className="sell__heading">
              <h1 className="sell__heading-h1">Best Sellers</h1>
            </div>
            <SellList
              img="Images/product/product-1.jpg"
              name="Cherry"
              price="1.60"
              sell="2.00"
            />
            <SellList
              img="Images/product/product-2.jpg"
              name="Pomegranate"
              price="3.00"
              sell="4.00"
            />
            <SellList
              img="Images/product/product-3.jpg"
              name="Orange"
              sell="5.00"
              price="4.00"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default BestSell;
