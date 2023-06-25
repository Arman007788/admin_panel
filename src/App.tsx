import React, { FC, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import AdminPanelList from "./components/AdminPanelList/AdminPanelList";
import Users from "./pages/Users/Users";
import User from "./pages/User/User";
import PremiumUsers from "./pages/PremiumUsers/PremiumUsers";
import Restaurants from "./pages/Restaurants/Restaurants";
import Learn from "./pages/Learn/Learn";
import Shop from "./pages/Shop/Shop";
import Cuisine from "./pages/Cuisine/Cuisine";
import Post from "./pages/Post/Post";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <TopNavbar />
      <AdminPanelList />
      <section className="pl-240 pt-70 pr-32">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/premium-users" element={<PremiumUsers />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/post" element={<Post />} />
          <Route path="/users">
            <Route index element={<Users />} />
            <Route path="new" element={<User />} />
            <Route path=":id" element={<User />} />
          </Route>
        </Routes>
        <ToastContainer position="bottom-right" />
      </section>
    </div>
  );
};

export default App;
