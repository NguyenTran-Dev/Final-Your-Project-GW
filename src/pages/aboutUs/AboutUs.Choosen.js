import React from "react";
import { Row, Col, Carousel } from "antd";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGlobeAsia,
  faFighterJet,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faGlobeAsia, faFighterJet, faComment);
const Choosen = () => {
  return (
    <div className="aboutUs__choose">
      <div>
        <h1 className="aboutUs__choose-h1">Why Choose Us</h1>
      </div>
      <Row gutter={[24, 24]} className="aboutUs__choose-content">
        <Col
          className="aboutUs__choose-content--pay"
          lg={{ span: 8 }}
          md={{ span: 24 }}
        >
          <FontAwesomeIcon
            className="aboutUs__choose-content--pay--icon"
            icon="globe-asia"
          />
          <h3 className="aboutUs__choose-content--pay--h3">FREE SHIPPING</h3>
          <p className="aboutUs__choose-content--pay--p">
            Amadea Shop is a very slick and clean e-commerce template with
            endless possibilities.
          </p>
        </Col>
        <Col
          className="aboutUs__choose-content--ship"
          lg={{ span: 8 }}
          md={{ span: 24 }}
        >
          <FontAwesomeIcon
            className="aboutUs__choose-content--pay--icon"
            icon="fighter-jet"
          />
          <h3 className="aboutUs__choose-content--pay--h3">FAST DELIVERY</h3>
          <p className="aboutUs__choose-content--pay--p">
            Amadea Shop is a very slick and clean e-commerce template with
            endless possibilities.
          </p>
        </Col>
        <Col
          className="aboutUs__choose-content--customer"
          lg={{ span: 8 }}
          md={{ span: 24 }}
        >
          <FontAwesomeIcon
            className="aboutUs__choose-content--pay--icon"
            icon="comment"
          />
          <h3 className="aboutUs__choose-content--pay--h3">
            CUSTOMERS SUPPORT
          </h3>
          <p className="aboutUs__choose-content--pay--p">
            Amadea Shop is a very slick and clean e-commerce template with
            endless possibilities.
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default Choosen;
