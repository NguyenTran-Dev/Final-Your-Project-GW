import React from "react";
import { Button, Popover } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
library.add(faEye);
const SellList = (props) => {
  return (
    <div className="sell__content">
      <div className="sell__img">
        <img width="100%" src={props.img} alt="Product image" />
        <Popover content="Quick view" id="popover">
          <div className="sell__img-eye">
            <FontAwesomeIcon icon="eye" className="sell__img-eye--icon" />
          </div>
        </Popover>
      </div>
      <div className="sell__list">
        <Button className="sell__list-btn">FRUITS</Button>
        <h3 className="sell__list-h3">{props.name} </h3>
        <div className="sell__list-price">
          <p className="sell__list-price--p">${props.price}</p>
          <p className="sell__list-price--p discounted">${props.sell}</p>
        </div>
      </div>
    </div>
  );
};
export default SellList;
