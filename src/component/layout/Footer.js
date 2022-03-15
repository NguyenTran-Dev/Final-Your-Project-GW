import React from "react";
import { Row, Col, Input, Button } from "antd";
import {
  SendOutlined,
  HeartTwoTone,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  StarOutlined,
} from "@ant-design/icons";

import CardItem from "../Compons/CardItemFooter/CardItem";

import "../../style/style.scss";
import "../../style/footer.scss";

const Footer = () => {
  return (
    <div className="footer ">
      <Row className=" footer__top container">
        <Col
          className="footer__top--contact"
          lg={{ span: 6 }}
          xs={{ span: 24 }}
        >
          <h2>CONTACT INFO</h2>
          <h3 className="footer--padding">
            <EnvironmentOutlined className="icon" />
            Location:
          </h3>
          <a href="https://goo.gl/maps/qbG5TN9bEP3iWFGL7">
            127 Hung Vuong street,
            <br /> Vinh Trung, Da Nang City
          </a>
          <h3 className="footer--padding">
            <PhoneOutlined className="icon" />
            Call Us Now:
          </h3>
          <p>0943.11.9999</p>
          <h3 className="footer--padding">
            <MailOutlined className="icon" />
            Email:
          </h3>
          <p>lndteams.dev@gmail.com</p>
        </Col>
        <Col
          className="footer__contact--newArrivals"
          lg={{ span: 7 }}
          xs={{ span: 24 }}
        >
          <h2>NEW ARRIVALS</h2>
          <CardItem
            img="images/product/product-2.jpg"
            name="Pomegranates"
            price="2.50"
          />
          <CardItem
            img="images/product/product-3.jpg"
            name="Orange"
            price="2.00"
          />
          <CardItem
            img="images/product/product-4.jpg"
            name="Kiwi"
            price="9.30"
          />
        </Col>
        <Col lg={{ span: 7 }} xs={{ span: 24 }}>
          <h2>TOP RATED PRODUCT</h2>
          <CardItem
            img="images/product/product-12.jpg"
            name="Pork"
            price="7.99"
          />
          <CardItem
            img="images/product/product-14.jpg"
            name="Chicken meat"
            price="10.2"
          />
          <CardItem
            img="images/product/product-13.jpg"
            name="Fish"
            price="8.2"
          />
        </Col>
        <Col
          className="footer__top--newsLetter"
          lg={{ span: 4 }}
          xs={{ span: 24 }}
        >
          <h2>NEWSLETTER</h2>
          <p className="footer--padding">
            Subscribe to the Kavir mailing
            <br /> list to receive updates on new <br />
            arrivals,special offers and other <br /> discount information.
          </p>
          <Input
            className="footer__top--newsLetter-input"
            placeholder="Your email address"
          />
          <Button className="footer__btn" type="primary">
            <SendOutlined />
            Subscribe
          </Button>
        </Col>
      </Row>
      <div className="footer__bot">
        <Row className="container">
          <Col lg={{ span: 19 }}>
            <i>
              &copy; 2021 <strong>Selena</strong> Made with{" "}
              <HeartTwoTone twoToneColor="#eb2f96" /> by <a>LND team</a>
            </i>
          </Col>
          <Col lg={{ span: 5 }}>
            <img src="images/payment.png" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Footer;
