import React from "react";
import "./Header.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import soheb from "../../utils/soheb.jpg";
const Header = () => {
  return (
    <div className="header-container">
      <h2>Dashboard</h2>
      <div className="search-container">
        <div className="search-div">
          <SearchOutlinedIcon style={{ opacity: 0.5 }} />
          <input type="search" placeholder="search for anything..." />
        </div>
        <div className="bell-div">
          <NotificationsNoneOutlinedIcon className="bell-icon" />
        </div>
        <div className="user-div">
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src={soheb}
              sx={{ width: 30, height: 30 }}
            />
          </Stack>
          <div className="admin-name-div">
            <span>Sayyad Soheb</span>
            <small>Sayyad Soheb</small>
          </div>
          <KeyboardArrowDownOutlinedIcon style={{ opacity: 0.5 }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
