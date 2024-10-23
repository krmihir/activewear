import React from "react";
import { Link } from "react-router-dom";
import menwear from "./../assets/menwear.webp";
import womenwear from "./../assets/womenwear.jpg";

const Home = () => {
  return (
    <div className="container-fluid">
      <h1 className="mt-5">Welcome to Active Sportswear</h1>
      <p>Explore the best gear for your sports needs!</p>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="card mt-3">
            <img
              src={menwear}
              className="card-img-top"
              alt="Men's Collection"
            />
            <div className="card-body">
              <h5 className="card-title">Men's Collection</h5>
              <Link to="/products/men" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mt-3">
            <img
              src={womenwear}
              className="card-img-top"
              alt="Women's Collection"
            />
            <div className="card-body">
              <h5 className="card-title">Women's Collection</h5>
              <Link to="/products/women" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
