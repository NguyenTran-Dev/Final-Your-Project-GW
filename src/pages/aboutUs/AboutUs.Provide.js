import React from "react";

import { Row, Col, Carousel } from "antd";

const Provide = () => {
  return (
    <Row className="aboutUs__provide" gutter={[24, 24]}>
      <Col lg={{ span: 12 }} className="aboutUs__provide-content">
        <h3 className="aboutUs__provide-content--h3">Provide Best</h3>
        <h1 className="aboutUs__provide-content--h1">Product For You</h1>
        <p className="aboutUs__provide-content--p">
          We provide the best Beard oile all over the world. We are the worldd
          best store in indi for Beard Oil. You can buy our product without any
          hegitation because they truste us and buy our product without any
          hagitation because they belive and always happy buy our product.
        </p>
        <p className="aboutUs__provide-content--p">
          {" "}
          Some of our customer say’s that they trust us and buy our product
          without any hagitation because they belive us and always happy to buy
          our product. We provide the beshat they trusted us and buy our product
          without any hagitation because they belive us and always happy to buy.
        </p>
      </Col>
      <Col lg={{ span: 12 }} className="aboutUs__provide-image">
        <div className="aboutUs__provide-image--border">
          <img
            className="aboutUs__provide-image--border--img"
            src="Images/about/about.jpg"
            alt=""
          />
        </div>
      </Col>
    </Row>
  );
};
export default Provide;
