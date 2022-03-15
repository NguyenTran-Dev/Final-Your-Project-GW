import React from "react";
import WishListTable from "./WishList.Table";
import EmtyWishlist from "./Wishlist.Emty";
import "../../../style/wishlist.scss";
import { useSelector } from "react-redux";

const WishList = () => {
  const { wishlist } = useSelector((state) => state.listProduct);
  return (
    <div>
      <div className="wishlist__header">
        <h1 className="wishlist__header-h1">Shop</h1>
        <h3 className="wishlist__header-h3">WishList </h3>
      </div>
      <div className="container">
        {wishlist.length ? <WishListTable /> : <EmtyWishlist />}
      </div>
    </div>
  );
};
export default WishList;
