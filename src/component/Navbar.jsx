import React from "react";

const Navbar = props => {
  return (
    <nav>
      <div className="container">
        <div className="logo nav">
          <a href="#">Zadora</a>
        </div>
        <div className="menu nav">
          <a href="#">Wanita</a>
          <a href="#">Pria</a>
          <a href="#">Anak-Anak</a>
        </div>
        <div className="search nav">
          <input type="text" placeholder="Cari produk, tren, dan merek" />
          <i className="fa fa-search"></i>
        </div>
        <div className="user nav">
          <span className="cart">
            <i className="fa fa-shopping-cart"></i>
          </span>
          <span className="wishlist">
            <i className="fa fa-heart"></i>
          </span>
          <span className="account">
            <i className="fa fa-user"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
