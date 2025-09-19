import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import type React from "react";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Browse from "@/pages/AfterLogin/Browse";
import Login from "@/pages/AuthPages/Login";
import SignUp from "@/pages/AuthPages/SignUp";
import TVShows from "@/pages/AfterLogin/TVShows";
import Movies from "@/pages/AfterLogin/Movies";
import NewPopular from "@/pages/AfterLogin/NewPopular";
import MyList from "@/pages/AfterLogin/MyList";
import BrowseByLang from "@/pages/AfterLogin/BrowseByLang";
import Overview from "@/pages/AvatarPages/Overview";
import Membership from "@/pages/AvatarPages/Membership";
import Security from "@/pages/AvatarPages/Security";
import Devices from "@/pages/AvatarPages/Devices";
import Profiles from "@/pages/AvatarPages/Profiles";
import Password from "@/pages/AfterLogin/Password";
import ForgotPassword from "@/pages/AuthPages/ForgotPassword";
import SearchResults from "@/pages/AfterLogin/SearchResults";


const AppRoutes: React.FC = () => {
  const { user, loading } = useAppSelector((state) => state.auth);

  // ⚡ Block routing entirely while loading
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <Routes>
      {!user ? (
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resetpassword" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      ) : (
        <Route element={<Layout />}>
          <Route path="/browse" element={<Browse />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/new-popular" element={<NewPopular />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/browse-by-lang" element={<BrowseByLang />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/security" element={<Security />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/password" element={<Password />} />
          <Route path="/resetpassword" element={<ForgotPassword />} />
           <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<Navigate to="/browse" replace />} />
        </Route>
      )}
    </Routes>
  );
};

export default AppRoutes;
