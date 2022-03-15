import React from "react";
import "../../../style/listitem.scss";
import SideBar from "./ListItem.SideBar";
import ShopItem from "./ListItem.Item";
import { Row, Col, Carousel } from "antd";

const ListItem = () => {
  const contentStyle = {
    height: "260px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };
  const imgstyle = {
    height: "100%",
    width: "100%",
  };
  return (
    <div className="homeshop">
      <div className="homeshop__header">
        <h1 className="homeshop__header-h1">Shop</h1>
        <h3 className="homeshop__header-h3">Product </h3>
      </div>
      <div className="container" style={{ position: "relative" }}>
        <Row>
          <Col lg={{ span: 6 }} xs={{ span: 24 }}>
            <SideBar />
          </Col>
          <Col lg={{ span: 18 }} xs={{ span: 24 }}>
            <ShopItem />
          </Col>
        </Row>
        <div>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <img style={imgstyle} src="Images/banner/banner-3.jpg" alt="" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img style={imgstyle} src="Images/banner/slide_7.jpg" alt="" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img style={imgstyle} src="Images/banner/cms_1.6.jpg" alt="" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img style={imgstyle} src="Images/banner/slide_6.jpg" alt="" />
              </h3>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default ListItem;
