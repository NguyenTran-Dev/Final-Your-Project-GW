/** @format */

import React from "react";
import { Menu } from "antd";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import {
  filterType,
  getListProductApi,
  setSortItem,
  setSortPrice,
  filterColor,
} from "../../../redux/reducers/productSlice";

import { Slider } from "antd";
const SideBar = () => {
  // Tên biến
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getListProductApi());
  }, []);
  // Use MediaQuery
  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  // function Đơn Giản
  function onChange(value) {
    dispatch(setSortItem(value));
  }
  const handleClick = (item) => {
    dispatch(filterType(item));
  };
  const handleColor = (i) => {
    dispatch(filterColor(i));
  };
  function onChange(value) {
    console.log(value, "123123");
    dispatch(setSortItem(value));
  }

  return (
    <div className="sidebar">
      <h1 className="sidebar__h1">Categories</h1>
      <Menu onClick={handleClick} className="sidebar__menu1" mode="inline">
        <Menu.ItemGroup key="sub1">
          <Menu.Item key="1">Vegetables</Menu.Item>
          <Menu.Item key="11">Fruits</Menu.Item>
          <Menu.Item key="8">Juice</Menu.Item>
          <Menu.Item key="5">Meat</Menu.Item>
          <Menu.Item key="2">All Product</Menu.Item>
        </Menu.ItemGroup>
      </Menu>
      {/* split */}
      <Slider range step={10} defaultValue={[0, 100]} onChange={onChange} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>1$</span>
        <span>30$</span>
        <span>60$</span>
        <span>100$</span>
      </div>
      <div className="sidebar__">
        <h1 className="sidebar__h1">Color</h1>

        <Menu onClick={handleColor} className="sidebar__menu1" mode="inline">
          <Menu.ItemGroup key="sub5">
            <Menu.Item key="red">
              <p style={{ color: "red" }}> Red</p>
            </Menu.Item>
            <Menu.Item key="orange">
              <p style={{ color: "orange" }}> Orange</p>
            </Menu.Item>
            <Menu.Item key="purple">
              <p style={{ color: "purple" }}> Purple</p>
            </Menu.Item>
            <Menu.Item key="green">
              <p style={{ color: "green" }}> Green</p>
            </Menu.Item>
            <Menu.Item key="yellow">
              <p style={{ color: "#c7a012" }}> Yellow</p>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </div>
      <div className="sidebar__img">
        {isMoblie ? (
          <img
            style={{ maxWidth: "250px" }}
            src="Images/banner/slide_6.jpg"
            alt=""
          />
        ) : (
          <img
            style={{ maxWidth: "250px" }}
            src="Images/banner/banner_left.jpg"
            alt=""
          />
        )}
      </div>
    </div>
  );
};
export default SideBar;
