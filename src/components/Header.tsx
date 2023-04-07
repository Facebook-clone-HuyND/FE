import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Input, Logo } from "../components";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__search">
          <SearchIcon color="action" />
          <Input label="Search" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__options"></div>
      </div>
      <div className="header__right">
        <p>huy</p>
      </div>
    </div>
  );
};

export default Header;
