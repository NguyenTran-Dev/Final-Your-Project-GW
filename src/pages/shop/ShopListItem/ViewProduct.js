import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Popover } from "antd";
import "./ViewProduct.scss";
library.add(faEye);

const ViewProduct = () => {
  return (
    <Popover content="Quick view">
      <div>
        <FontAwesomeIcon icon="eye" className="sell__eye-icon" />
      </div>
    </Popover>
  );
};

export default ViewProduct;
