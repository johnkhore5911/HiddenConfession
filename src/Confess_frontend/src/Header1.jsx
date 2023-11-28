import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Header1() {
  return (
    <div className="wrapper">
      <h1 className="Heading"> Your Safe Haven for Unspoken Words</h1>
      <div className="boxes">
        <Link to="/AddConfession" className="leftBox  AddBtn">
          <button className="AddBtn1 ">Whisper Wall</button>
        </Link>

        <Link to="/ConfessionGallery" className="rightBox  AddBtn">
          <button className="AddBtn1 ">Confession Gallery</button>
        </Link>
      </div>
    </div>
  );
}
{
  /* <Link to="/">Go Home ("/")</Link> */
}

export { Header1 };
