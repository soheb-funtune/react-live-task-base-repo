import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { setposts } from "../../state/slice";

const Home = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState();
  const { postsData } = useSelector((state) => state.data);
  useEffect(() => {
    setPosts(postsData);
  }, [postsData]);
  console.log(posts);
  const handleFav = (id) => {
    console.log("fav");
    const res = posts?.map((item) =>
      item?.id == id ? { ...item, isFav: true } : item
    );
    dispatch(setposts(res));
  };
  const handleUnFav = (id) => {
    console.log("unFav");
    const res = posts?.map((item) =>
      item?.id == id ? { ...item, isFav: false } : item
    );
    dispatch(setposts(res));
  };
  return (
    <div className="list-container">
      {posts?.map(({ title, id, isFav }) => (
        <div key={id} className="item">
          <div className="icons">
            {isFav ? (
              <FaHeart onClick={() => handleUnFav(id)} />
            ) : (
              <FaRegHeart onClick={() => handleFav(id)} />
            )}
          </div>
          <Link to={`single-post/${id}`}>
            <p className="title">Title : {title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
