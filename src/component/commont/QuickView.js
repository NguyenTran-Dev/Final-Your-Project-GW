import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Popover } from "antd";
import { ROUTE } from "../../constant/router";
library.add(faEye);

const QuickView = () => {
  return (
    <Popover content="Quick view">
      <div >
       <FontAwesomeIcon icon="eye" className="sell__eye-icon" />
      </div>
    </Popover>
  );
};

export default QuickView;
