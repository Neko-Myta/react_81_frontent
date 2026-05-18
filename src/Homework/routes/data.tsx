import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import User from "../pages/Users/components/User/User";
import Users from "../pages/Users/Users";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Lesson07 from "../Lessons/Lesson07/Lesson07";
import Lesson08 from "../Lessons/Lesson08/Lesson08";

import type { RouteObj } from "./type";
import Lesson09 from "../Lessons/Lesson09/Lesson09";
import Lesson10 from "../Lessons/Lesson10/Lesson10";
import Lesson11 from "../Lessons/Lesson11/Lesson11";
//import Lesson12 from "../Lessons/Lesson12/Lesson12";
import Lesson12_Olena from "../Lessons/Lesson12_Olena/Lesson12_Olena";
import Lessons from "../pages/Lessons/Lessons";
import Lesson15 from "../Lessons/Lesson15/Lesson15/Lesson15";

export const routesData: RouteObj[] = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/users", element: <Users /> },
    { path: "/users/user", element: <User /> },

    { path: "lessons", element: <Lessons />},
    { path: "lesson07", element: <Lesson07 /> },
    { path: "lesson08", element: <Lesson08 /> },
    { path: "lesson09", element: <Lesson09 /> },
    { path: "lesson10", element: <Lesson10 /> },
    { path: "lesson11", element: <Lesson11 /> },
  //  { path: "lesson12", element: <Lesson12 /> },
    { path: "lesson12_Olena", element: <Lesson12_Olena /> },
      { path: "/lesson15", element: <Lesson15 /> },
    
    { path: "*", element: <PageNotFound /> },
];