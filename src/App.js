import React from "react";
import "./assets/style.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div id="content">
          <div className="content-item">
            <div className="advantages">
              <div className="advantage-item">
                <i className="fa fa-check-square-o"></i>
                <span>Produk Original & Terjamin</span>
              </div>
              <div className="advantage-item">
                <i className="fa fa-tags"></i>
                <span>Ribuan Fashion Brand</span>
              </div>
              <div className="advantage-item">
                <i className="fa fa-refresh"></i>
                <span>Gratis Pengembalian</span>
              </div>
              <div className="advantage-item">
                <i className="fa fa-question-circle-o"></i>
                <span>Pertanyaan?</span>
              </div>
            </div>
            <button className="download-discount">
              Download & Dapatkan Diskon 20% <i className="fa fa-mobile"></i>
            </button>
          </div>

          <div className="content-item">
            <div className="banner-1">
              <div className="left-part">
                <div className="shop-pria">> Shop Pria</div>
              </div>
              <div className="right-part">
                <div className="shop-wanita">Shop Wanita ></div>
              </div>
            </div>
          </div>

          <div className="content-item">
            <div className="banner-2">
              <img src={require("./img/main_feature_2.jpg")} alt="" />
            </div>
          </div>
          <div className="content-item">
            <div className="banner-2">
              <img src={require("./img/main_feature_3.jpg")} alt="" />
            </div>
          </div>

          <div className="brands">
            <h1>Featured Brands</h1>
            <div className="show-brands">
              <img src={require("./img/brands1.jpg")} alt="brands" />
              <img src={require("./img/brands2.jpg")} alt="brands" />
              <img src={require("./img/brands3.jpg")} alt="brands" />
              <img src={require("./img/brands4.jpg")} alt="brands" />
              <img src={require("./img/brands5.jpg")} alt="brands" />
              <img src={require("./img/brands6.jpg")} alt="brands" />
              <img src={require("./img/brands7.jpg")} alt="brands" />
              <img src={require("./img/brands8.png")} alt="brands" />
              <img src={require("./img/brands9.jpg")} alt="brands" />
              <img src={require("./img/brands10.png")} alt="brands" />
              <img src={require("./img/brands11.jpg")} alt="brands" />
              <img src={require("./img/brands12.jpg")} alt="brands" />
              <img src={require("./img/brands13.jpg")} alt="brands" />
              <img src={require("./img/brands14.jpg")} alt="brands" />
            </div>
          </div>

          <div className="new-this-week">
            <h1>New This Week</h1>
            <div className="show-product">
              <div className="product">
                <img src={require("./img/product1.jpg")} alt="product" />
                <h3>All Under Rp.188000</h3>
                <p>Semua produk fashion untuk jiwa stylish Anda di bawah Rp188.000</p>
              </div>
              <div className="product">
                <img src={require("./img/product2.jpg")} alt="product" />
                <h3>KEMEJA DI BAWAH RP249.000</h3>
                <p>Temukan pilihan kemeja santai hingga formal disini</p>
              </div>
              <div className="product">
                <img src={require("./img/product3.jpg")} alt="product" />
                <h3>THE CROSSBODY BAGS UP TO 70% OFF</h3>
                <p>Style tas paling populer untuk menemani hari-hari kasual Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
