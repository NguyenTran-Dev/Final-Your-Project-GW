import React from "react";
import { Carousel, Row, Col, Button } from "antd";
import { useHistory } from "react-router-dom";

const Slider = () => {
  const history = useHistory();
  function goShopping() {
    history.push("/shop-product");
  }
  const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="container">
      <Carousel autoplay effect="fade" className="slider">
        <Row className="slider__content1">
          <Col
            className="slider__content1-text"
            lg={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <h1 className="slider__content1-text--h1">
              GREAT OFFERS <br /> ON FRUITS <br /> AND VEGETABLES
            </h1>
            <p className="slider__content1-text--p">
              we supply highly quality, premium organic product
            </p>
            <br />
            <Button id="slider__content1-text--btn" onClick={goShopping}>
              SHOP NOW
            </Button>
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <img
              className="slider__content1-text--img"
              src="Images/slider/slide_1.jpg"
            />
          </Col>
        </Row>
        <Row className="slider__content1">
          <Col
            className="slider__content1-text"
            lg={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <h1 className="slider__content1-text--h1">
              TASTY HEALTHY <br />
              WE SELL WHAT'S
              <br /> GOOD FOR YOU
            </h1>
            <p className="slider__content1-text--p">
              we supply highly quality, premium organic product
            </p>
            <br />
            <Button id="slider__content1-text--btn" onClick={goShopping}>
              SHOP NOW
            </Button>
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <img
              className="slider__content1-text--img"
              src="Images/slider/slide_2.jpg"
              style={contentStyle}
            />
          </Col>
        </Row>
      </Carousel>
    </div>
  );
};
export default Slider;
