import React from "react";
import { useMediaQuery } from "react-responsive";
import { Row, Col } from "antd";
const Categories = () => {
  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  return (
    <>
      <div className="categories__heading">
        <h1 className="categories__heading-h1">Popular Categories</h1>
      </div>
      <br />
      <Row gutter={ isMoblie ? 0 : 16} className="categories-item">
        <Col lg={{ span: 6 }} xs={{ span: 12 }}>
          <div style={{ padding: "8px" }}>
            <div className="categories-item-col green">
              <div className="categories-item-boder">
                <h2 className="categories-item-col--h2">Vegetables</h2>
                <img
                  className="categories-item-col--img"
                  src="Images/popu/cat-1.png"
                />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={{ span: 6 }} xs={{ span: 12 }}>
          <div style={{ padding: "8px" }}>
            <div className="categories-item-col orange">
              <div className="categories-item-boder">
                <h2 className="categories-item-col--h2">Fruits</h2>
                <img
                  className="categories-item-col--img"
                  src="Images/popu/cat-2.png"
                />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={{ span: 6 }} xs={{ span: 12 }}>
          <div style={{ padding: "8px" }}>
            <div className="categories-item-col blue">
              <div className="categories-item-boder">
                <h2 className="categories-item-col--h2">Juice</h2>
                <img
                  className="categories-item-col--img"
                  src="Images/popu/cat-3.png"
                />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={{ span: 6 }} xs={{ span: 12 }}>
          <div style={{ padding: "8px" }}>
            <div className="categories-item-col red">
              <div className="categories-item-boder">
                <h2 className="categories-item-col--h2">Meat</h2>
                <img
                  className="categories-item-col--img"
                  src="Images/popu/cat-4.png"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      ;
    </>
  );
};
export default Categories;
