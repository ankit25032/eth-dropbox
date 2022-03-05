import { useEffect } from "react";
import "./CSS/Navbar.css";
import { Link } from "react-router-dom";
import Avatar, { genConfig } from "react-nice-avatar";

export default function Navbar({ requestacc, address }) {
  useEffect(() => {
    setTimeout(() => {
      if (window.ethereum._state.accounts.length !== 0) {
        requestacc();
      }
    }, 100);
  }, []);
  console.log(address);
  //   const avatar = faker.image.avatar();
  //   console.log(address);
  return (
    <div className="navbar">
      <Link to="/">
        <h3 className="effect">D-DOC</h3>
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/files">
          <li>Files</li>
        </Link>
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
          <button
            onClick={() => {
              localStorage.setItem("isrequested", "true");
              requestacc();
            }}
            className="connect-btn"
          >
            Connect
          </button>
        )}
      </div>
    </div>
  );
}
