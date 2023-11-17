import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
