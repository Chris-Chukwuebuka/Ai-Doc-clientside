import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes, Route,  } from "react-router-dom"; // import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from "../Pages/Homepage";
import Error404Page from "../Pages/Erorr404Page";
import Login from "../Component/AuthComponents/Login";
import SignUp from "../Component/AuthComponents/SignUp";
import ProtectedRoutes from "../Layout/protectedRoutes";
const ChatPage = React.lazy(() => import("../Pages/Chat"));
const AppRoutes = () => {
  // const { user } = useSelector((state) => state.userState);
  // console.log("Rendering AppRoutes with user:", user);

  const user={
    user:"chris",
  }

  
  return (
    <Routes>
      <Route path="*" element={<Error404Page />} />
      <Route path="/" element={<HomePage />} />
      <Route
        path="/chat"
        element={
          <Suspense fallback={<div></div>}>
            <ProtectedRoutes user={user} children={<ChatPage />} />
          </Suspense>
        }
      >
        {console.log("Rendering /chat with user:", user)}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/chat/:chatTitle"
        element={
          <Suspense fallback={<div></div>}>
            <ProtectedRoutes user={user} children={<ChatPage />} />
          </Suspense>
        }
      >
        {console.log("Rendering /chat/:chatTitle with user:", user)}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
