import { useRef, useState } from "react";
import "./CSS/Main.css";
function Uploadbox() {
  const input = useRef();
  const [inputfile, setinputfile] = useState("");
  return (
    <div className="upload-box">
      <p>Share Files</p>
      <img src="/Other 07.png" alt="" />
      <input
        onChange={(e) => {
          const file = e.target.files[0];
          setinputfile(file);
        }}
        ref={input}
        className="file"
        type="file"
      />
      <button onClick={() => input.current.click()} className="file-btn">
        Select file
      </button>
      {inputfile ? (
        <div className="filename-box">
          <p className="filename-text">{inputfile.name}</p>
        </div>
      ) : (
        ""
      )}
      <button
        onClick={() => {
          console.log(inputfile);
        }}
        className="upload-btn"
      >
        Upload
      </button>
    </div>
  );
}

export default Uploadbox;
