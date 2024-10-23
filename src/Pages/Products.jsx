import React from "react";
import { Link, Outlet } from "react-router-dom";
import bottle from "./../assets/bottle.jpg";
import cap from "./../assets/cap.jpg";
import gymbag from "./../assets/gymbag.jpg";
import menjacket from "./../assets/menjacket.jpg";
import menshorts from "./../assets/menshorts.jpg";
import mentshirt from "./../assets/mentshirt.jpg";
import womentshirt from "./../assets/womentshirt.jpg";
import womenlegging from "./../assets/womenlegging.png";
import womenjacket from "./../assets/womenjacket.jpg";

const Products = () => {
  return (
    <div className="container-fluid">
      <h1 className="mt-5">Our Products</h1>
      {/* Men's Activewear Section */}
      <h2 className="mt-5">Men's Activewear</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card mb-4">
            <img src={mentshirt} className="card-img-top" alt="Men's T-Shirt" />
            <div className="card-body">
              <h5 className="card-title">Men's T-Shirt</h5>
              <p className="card-text">$29.99</p>
              <Link to="/products/men/1" className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card mb-4">
            <img src={menshorts} className="card-img-top" alt="Men's Shorts" />
            <div className="card-body">
              <h5 className="card-title">Men's Shorts</h5>
              <p className="card-text">$24.99</p>
              <Link to="/products/men/2" className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card mb-4">
            <img src={menjacket} className="card-img-top" alt="Men's Jacket" />
            <div className="card-body">
              <h5 className="card-title">Men's Jacket</h5>
              <p className="card-text">$49.99</p>
              <Link to="/products/men/3" className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Women's Activewear Section */}
      <h2 className="mt-5">Women's Activewear</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card mb-4">
            <img
              src={womentshirt}
              className="card-img-top"
              alt="Women's Sports tshirt"
            />
            <div className="card-body">
              <h5 className="card-title">Women's Sports T-Shirt</h5>
              <p className="card-text">$29.99</p>
              <Link to="/products/women/1" className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card mb-4">
            <img
              src={womenlegging}
              className="card-img-top"
              alt="Women's Leggings"
            />
            <div className="card-body">
              <h5 className="card-title">Women's Leggings</h5>
              <p className="card-text">$39.99</p>
              <Link to="/products/women/2" className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card mb-4">
            <img
              src={womenjacket}
              className="card-img-top"
              alt="Women's Jacket"
            />
            <div className="card-body">
              <h5 className="card-title">Women's Jacket</h5>
              <p className="card-text">$49.99</p>
              <Link to="/products/women/3" className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Accessories Section */}
      <h2 className="mt-5">Accessories</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card mb-4">
            <img src={cap} className="card-img-top" alt="Sports Cap" />
            <div className="card-body">
              <h5 className="card-title">Sports Cap</h5>
              <p className="card-text">$14.99</p>
              <Link to="/products/accessories/1" className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card mb-4">
            <img src={gymbag} className="card-img-top" alt="Gym Bag" />
            <div className="card-body">
              <h5 className="card-title">Gym Bag</h5>
              <p className="card-text">$29.99</p>
              <Link to="/products/accessories/2" className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card mb-4">
            <img src={bottle} className="card-img-top" alt="Water Bottle" />
            <div className="card-body">
              <h5 className="card-title">Water Bottle</h5>
              <p className="card-text">$9.99</p>
              <Link to="/products/accessories/3" className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet /> {/* Render nested routes */}
    </div>
  );
};

export default Products;
