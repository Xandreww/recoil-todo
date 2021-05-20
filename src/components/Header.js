import React from "react";
import reactLogo from "../shared/images/reactLogo.png";
import recoilLogo from "../shared/images/recoilLogo.svg";
import goRestLogo from "../shared/images/goRestLogo.png";
import themeUiLogo from "../shared/images/themeUiLogo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>Andrzej Popek's Todo List</h1>
      <div className="logos">
        <div>Using</div>
        <a href="https://reactjs.org/" target="blank">
          <img src={reactLogo} alt="Recoil logo" />
        </a>
        <a href="https://recoiljs.org/" target="blank">
          <img src={recoilLogo} alt="Recoil logo" />
        </a>
        <a href="https://gorest.co.in/" target="blank">
          <img src={goRestLogo} alt="Recoil logo" />
        </a>
        <a href="https://theme-ui.com/home/" target="blank">
          <img src={themeUiLogo} alt="Recoil logo" />
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
