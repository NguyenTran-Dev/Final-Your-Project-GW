/** @format */

import React from "react";
import { Row, Col, Input, Button, Form } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import "../../style/form.scss";
import "../../style/base.scss";
import "../../style/formContact.scss";
const Contact = () => {
  return (
    <>
      <div className="contact__header">
        <h1 className="contact__header-h1">Contact</h1>
        <h3 className="contact__header-h3">Contact Us </h3>
      </div>
      <div className="container">
        <Row className="form__contact">
          <Col
            lg={{ span: 12 }}
            md={{ span: 24 }}
            className="form__contact--user"
          >
            <h1>Tell Us Your Comment</h1>
            <Form name="nest-messages">
              <div>
                <Form.Item name="name" rules={[{ required: true }]}>
                  <Input
                    placeholder="Name"
                    className="form__group--input form__contact--user--width"
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  type="number"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Phone" className="form__group--input" />
                </Form.Item>
              </div>
              <Form.Item name="subject" rules={[{ required: true }]}>
                <Input placeholder="Subject" className="form__group--input" />
              </Form.Item>
              <Form.Item name="email" rules={[{ type: "email" }]}>
                <Input placeholder="Email" className="form__group--input" />
              </Form.Item>
              <Form.Item name="message">
                <Input.TextArea
                  placeholder="Message"
                  className="form__group--input"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="form__btn">
                  SEND MESSAGE
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col lg={{ span: 12 }} 
            md={{ span: 24 }}
            className="form__contact--our">
            <h1>Contact Us</h1>
            <p>
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram anteposuerit litterarum formas human.
            </p>
            <p>
              <EnvironmentOutlined className="icon" /> Address : 78 Le Thanh Nghi
              street, Hai Chau Ward, Da Nang City
            </p>
            <p>
              <MailOutlined className="icon" />
              Email: nguyenthtran.dev@gmail.com
            </p>
            <p>
              <PhoneOutlined className="icon" />
              Phone Number: 0943.116.207
            </p>
            <h2>Working hours</h2>
            <p>Monday – Saturday: 08AM – 22PM</p>
          </Col>
        </Row>
        <Row>
          <iframe
            className="form__contact--map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.454668602513!2d108.2142685153433!3d16.041879044430296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219f7fd832c31%3A0x6942394fdfaa9c84!2zNzggxJAuIEzDqiBUaGFuaCBOZ2jhu4ssIEhvw6AgQ8aw4budbmcgQuG6r2MsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1650986712952!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Row>
      </div>
    </>
  );
};
export default Contact;
