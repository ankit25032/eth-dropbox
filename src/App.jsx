import "./App.css";
import { ethers } from "ethers";
import DStorage from "./artifacts/contracts/Dstorage.sol/DStorage.json";

import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const dsadress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const [address, setaddress] = useState("");

  //requesting account from metamask
  async function requestAccount() {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setaddress(account[0]);
  }
  async function fetchCount() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(dsadress, DStorage.abi, provider);
      try {
        const data = await contract.fileCount();
        console.log("data: ", data.toString());
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }
  return (
    <div className="App">
      <Navbar address={address} requestacc={requestAccount} />
      login
      <h1 className="text-3xl font-bold flex underline">Hello world!</h1>
      <button onClick={fetchCount}>getcount</button>
    </div>
  );
}

export default App;
