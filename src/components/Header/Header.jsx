import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const Header = () => {
  const location = useLocation();
  const addPath = location?.pathname?.split("/")?.[1];
  console.log(addPath);
  const [favCount, setFavCount] = useState();
  const { postsData } = useSelector((state) => state.data);
  useEffect(() => {
    let count = 0;
    postsData?.forEach((item) => {
      item?.isFav && count++;
    });
    setFavCount(count);
  }, [postsData]);
  return (
    <div className="header-container">
      <h2>
        <Link to={"/"}>LOGO</Link>
      </h2>
      <div className="fav-count">
        {addPath !== "add" && (
          <Link className="add-link" to="/add">
            Add <IoMdAdd className="add-icon" />
          </Link>
        )}
        <Link to="/fav-list">
          {" "}
          <spna className="count">{favCount || 0}</spna>
          <FaHeart style={{ fontSize: "30px" }} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
