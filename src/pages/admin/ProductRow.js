/** @format */

import React from "react";
import {
  EditFilled,
  DeleteOutlined,
  SaveOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteListProductApi,
  getListProductApi,
  setSort,
  updateProductApi,
  setCurrentPage,
  searchItem,
} from "../../redux/reducers/productSlice";
import { Button, Input, Select, Pagination,message } from "antd";
import { useState } from "react";

const ProductRow = () => {
  const dispatch = useDispatch();
  const { listProductApi } = useSelector((state) => state.listProduct);
  const { currentPage } = useSelector((state) => state.listProduct);
  const PAGE_SIZE = 12;
  const [edit, setEdit] = useState();
  const { Option } = Select;
  React.useEffect(() => {
    dispatch(getListProductApi());
  }, []);

  const [formNewVl, setFormNewVl] = useState({
    name: "",
    stock: "",
    price: "",
    type: "",
    search: "",
  });
  const handelOnChange = (e) => {
    if (e.target) {
      setFormNewVl({ ...formNewVl, [e.target.name]: e.target.value });
    } else {
      setFormNewVl({ ...formNewVl });
    }
  };
  const handleEdit = (id) => {
    setEdit(id);
  };

  const handleSave = (id) => {
    dispatch(updateProductApi({ ...formNewVl, id }));
    message.success('Update Success', 4);
    dispatch(getListProductApi());
    setEdit();
  };

  function handleChange(value) {
    dispatch(setSort(value));
  }
  const handleSearch = () => {
    dispatch(searchItem(formNewVl.search));
  };
  const renderListProduct = () => {
    return listProductApi
      .map((item, index) => {
        return (
          <>
            {edit === item.id ? (
              <tr>
                <td>{item.id}</td>
                <td>
                  <Input
                    name="name"
                    onChange={(e) => handelOnChange(e)}
                    placeholder={item.name}
                    value={formNewVl.name}
                  />
                </td>
                <td>
                  <Input
                    name="type"
                    onChange={(e) => handelOnChange(e)}
                    placeholder={item.type}
                    value={formNewVl.type}
                  />
                </td>
                <td>
                  <Input
                    name="stock"
                    onChange={(e) => handelOnChange(e)}
                    placeholder={item.stock}
                    value={formNewVl.stock}
                  />
                </td>
                <td>
                  <Input
                    name="price"
                    onChange={(e) => handelOnChange(e)}
                    placeholder={item.price}
                    value={formNewVl.price}
                  />
                </td>

                <td className="icon">
                  <SaveOutlined
                    htmlType="submit"
                    onClick={() => {
                      handleSave(item.id);
                    }}
                  />
                </td>
                <td className="icon">
                  <CloseOutlined
                    onClick={() => {
                      setEdit();
                    }}
                  />
                </td>
              </tr>
            ) : (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td className="icon">
                  <EditFilled
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                  />
                </td>
                <td className="icon">
                  <DeleteOutlined
                    onClick={async () => {
                      await dispatch(deleteListProductApi(item.id));
                      dispatch(getListProductApi());
                    }}
                  />
                </td>
              </tr>
            )}
          </>
        );
      })
      .splice((currentPage - 1) * PAGE_SIZE)
      .splice(0, PAGE_SIZE);
  };
  return (
    <div className="admin__users">
      <h2>Product Managerment </h2>
      <div className="top top--flex">
        <div>
          <Select
            defaultValue="All"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="All">All</Option>
            <Option value="Name">Name (A-Z)</Option>
            <Option value="Price">Price (S-L)</Option>
            <Option value="Stock">Stock (S-L)</Option>
          </Select>
        </div>
        <div className="top--width top--flex">
          <Input
            placeholder="Search..."
            name="search"
            onChange={(e) => {
              handelOnChange(e);
            }}
            value={formNewVl.search}
          />
          <Button htmlType="html" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
      <table>
        <tr>
          <th className="id">ID</th>
          <th className="name">Product</th>
          <th className="type">Type</th>
          <th className="stock">Stock</th>
          <th className="price">Price ($)</th>
          <th className="edit">Edit</th>
          <th className="delete">Delete</th>
        </tr>
        {renderListProduct()}
      </table>
      <div className="shopitem__pagi">
        <Pagination
          pageSize={PAGE_SIZE}
          current={currentPage}
          total={listProductApi.length}
          onChange={(page) => {
            dispatch(setCurrentPage(page));
            window.scrollTo(0, 200);
          }}
        />
      </div>
    </div>
  );
};
export default ProductRow;
