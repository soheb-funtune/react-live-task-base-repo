import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FavList = () => {
  const [favList, setFavList] = useState();
  const { postsData } = useSelector((state) => state.data);
  useEffect(() => {
    const res = postsData?.filter((item) => item?.isFav && item);
    setFavList(res);
  }, [postsData]);
  return (
    <div>
      <h3>Favorite List</h3>
      <div className="list-container">
        {favList?.map(({ title, id, isFav }) => (
          <div key={id} className="item">
            <p className="title">Title : {title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavList;
