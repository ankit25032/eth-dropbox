import React from "react";
import "./CSS/Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <span>
            Upload Documents <br /> On Blockchain
          </span>
          <p>A web3 website for your Documents with high security</p>
          <Link to="/files">
            <button className="hero-btn">Upload</button>
          </Link>
        </div>
        <div className="hero-img">
          <img src="/back3.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
