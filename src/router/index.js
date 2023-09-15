import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home/index";
import Login from "../views/Login/index";
import AddRecipe from "../views/AddRecipe";
import Register from "../views/Register";
import DetailRecipe from "../views/DetailRecipe";
import Profile from "../views/Profile";
import DetailVideo from "../views/DetailVideo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="addRecipe" element={<AddRecipe />} />
          <Route path="detailRecipe" element={<DetailRecipe />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="DetailVideo" element={<DetailVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
