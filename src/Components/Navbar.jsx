import React from "react";
import "./CSS/Navbar.css";
import Avatar, { genConfig } from "react-nice-avatar";

export default function Navbar({ requestacc, address }) {
  //   const avatar = faker.image.avatar();
  //   console.log(address);
  return (
    <div className="navbar">
      <h3 className="effect">D-DOC</h3>
      <ul>
        <li>Home</li>
        <li>Files</li>
      </ul>

      <div className="connect">
        {address ? (
          <>
            <p className="address-text">
              {address.substring(0, 4) + "...." + address.substring(38, 42)}
            </p>
            <Avatar style={{ width: "3rem", height: "3rem" }} />
          </>
        ) : (
          <button onClick={requestacc} className="connect-btn">
            Connect
          </button>
        )}
      </div>
    </div>
  );
}
