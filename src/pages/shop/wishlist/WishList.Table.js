import { Button } from "antd";
import React from "react";
import WishListRow from "./WishList.WishListRow";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProductApi } from "../../../redux/reducers/productSlice";
const WishListTable = () => {
  
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getListProductApi());
  }, []);
  const {wishlist} = useSelector(
    (state) => state.listProduct
  );
  const renderDataWishlist = ()=>{
    return wishlist?.map((item,index)=>{
      return(
        <WishListRow
          key={index}
          {...item}
        />
      )
    })
  }
  return (
    <>
      <div className="wishlist__responsive">
        <table className="wishlist__table">
          <tr className="wishlist__table-tr">
            <th className="wishlist__table-tr--th tr--thum">THUMBNAIL</th>
            <th className="wishlist__table-tr--th tr--product">PRODUCT</th>
            <th className="wishlist__table-tr--th tr--price">PRICE</th>
            <th className="wishlist__table-tr--th tr--quantity">
              STOCK STATUS
            </th>
            <th className="wishlist__table-tr--th tr--total">ADD TO CART</th>
            <th className="wishlist__table-tr--th tr--remove">REMOVE</th>
          </tr>
          {renderDataWishlist()}
          <tr></tr>
        </table>
      </div>
    </>
  );
};
export default WishListTable;
