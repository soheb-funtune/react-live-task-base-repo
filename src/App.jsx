import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import Add from "./components/Add/Add";
import { useDispatch } from "react-redux";
import { setposts } from "./state/slice";
import SinglePost from "./components/SinglePost/SinglePost";
import Header from "./components/Header/Header";
import FavList from "./components/FavList/FavList";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const fetchData = async () => {
        let res = [];

        res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
          (response) => response.json()
        );

        if (res.length) {
          res = res?.slice(0, 10);
          console.log({ res });
          dispatch(setposts([...res]));
        }
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/fav-list" element={<FavList />} />
        <Route path="/single-post/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
