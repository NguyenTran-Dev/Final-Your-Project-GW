import React from "react";
import { useMediaQuery } from "react-responsive";

import { Row, Col } from "antd";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPaperPlane,
  faDollarSign,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faPaperPlane, faDollarSign, faGlobe);

const Shipping = () => {
  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  return (
    <Row className="shipping">
      <Col className="shipping__detail" lg={{ span: 8 }} xs={{ span: 24 }}>
        <Row
          style={{
            margin: "0 1rem",
            borderRight: isMoblie ? "none" : ".1rem solid #e5e5e5",
          }}
        >
          <Col className="shipping__detail-plant" xs={{ span: 6 }}>
            <FontAwesomeIcon
              className="shipping__detail-plant--icon"
              icon="paper-plane"
            />
          </Col>
          <Col className="shipping__detail-content" xs={{ span: 18 }}>
            <h3 className="shipping__detail-content--h3">Free Shipping</h3>
            <p className="shipping__detail-content--p">
              Free Delivery on all over $99
            </p>
          </Col>
        </Row>
      </Col>
      <Col className="shipping__detail" lg={{ span: 8 }} xs={{ span: 24 }}>
        <Row
          style={{
            margin: "0 1rem",
            borderRight: isMoblie ? "none" : ".1rem solid #e5e5e5",
          }}
        >
          <Col className="shipping__detail-plant" xs={{ span: 6 }}>
            <FontAwesomeIcon
              className="shipping__detail-plant--icon"
              icon="dollar-sign"
            />
          </Col>
          <Col className="shipping__detail-content" xs={{ span: 18 }}>
            <h3 className="shipping__detail-content--h3">Sell every day</h3>
            <p className="shipping__detail-content--p">
              We have sell offers every day
            </p>
          </Col>
        </Row>
      </Col>{" "}
      <Col className="shipping__detail" lg={{ span: 8 }} xs={{ span: 24 }}>
        <Row
          style={{
            margin: "0 1rem",
            borderRight: isMoblie ? "none" : ".1rem solid #e5e5e5",
          }}
        >
          <Col className="shipping__detail-plant" xs={{ span: 6 }}>
            <FontAwesomeIcon
              className="shipping__detail-plant--icon"
              icon="globe"
            />
          </Col>
          <Col className="shipping__detail-content" xs={{ span: 18 }}>
            <h3 className="shipping__detail-content--h3">Payment</h3>
            <p className="shipping__detail-content--p">You can pay online</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Shipping;

{
  /* <Col className="shipping__detail" lg={{ span: 8 }} xs={{ span: 24 }}>
        <Row>
          <Col className="shipping__detail-plant" xs={{ span: 6 }}>
            <FontAwesomeIcon
              className="shipping__detail-plant--icon"
              icon="dollar-sign"
            />
          </Col>
          <Col className="shipping__detail-content" xs={{ span: 18 }}>
            <h3 className="shipping__detail-content--h3">SALE</h3>
            <p className="shipping__detail-content--p">
              We have sale items every day
            </p>
          </Col>
        </Row>
      </Col>{" "}
      <Col className="shipping__detail" lg={{ span: 8 }} xs={{ span: 24 }}>
        <Row>
          <Col className="shipping__detail-plant" xs={{ span: 6 }}>
            <FontAwesomeIcon
              className="shipping__detail-plant--icon"
              icon="globe"
            />
          </Col>
          <Col className="shipping__detail-content" xs={{ span: 18 }}>
            <h3 className="shipping__detail-content--h3">PAYMENT</h3>
            <p className="shipping__detail-content--p">You can pay online</p>
          </Col>
        </Row>
      </Col> */
}
