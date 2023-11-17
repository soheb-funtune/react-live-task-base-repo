import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { setposts } from "../../state/slice";

const SinglePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [post, setPost] = useState();
  const { postsData } = useSelector((state) => state.data);

  useEffect(() => {
    setPost(postsData?.filter((item) => item?.id == id)?.[0]);
  }, [id, postsData]);
  console.log({ post });

  const handleFav = (id) => {
    console.log("fav");
    const res = postsData?.map((item) =>
      item?.id == id ? { ...item, isFav: true } : item
    );
    dispatch(setposts(res));
  };
  const handleUnFav = (id) => {
    console.log("unFav");
    const res = postsData?.map((item) =>
      item?.id == id ? { ...item, isFav: false } : item
    );
    dispatch(setposts(res));
  };
  return (
    <div>
      <div className="title-div">
        <p className="title">Title : {post?.title}</p>
        <p>ID : {post?.id}</p>
      </div>
      <div className="img-div">
        {post?.isFav ? (
          <FaHeart onClick={() => handleUnFav(id)} />
        ) : (
          <FaRegHeart onClick={() => handleFav(id)} />
        )}
        <img
          src="https://source.unsplash.com/collection/928423/1280x720"
          alt="image"
        />
      </div>
      <p>Body : {post?.body}</p>
    </div>
  );
};

export default SinglePost;
