import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import BlogDetails from "pages/BlogDetails";
import BloggerDetails from "pages/BloggerDetails";
import Contact from "pages/Contact";
import About from "pages/About";
import BlogPage from "pages/SingleBlogPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "blogdetails",
      element: <BlogDetails />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "bloggerdetails",
      element: <BloggerDetails />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "blogpage",
      element: <BlogPage />,
    }
  ]);

  return element;
};

export default ProjectRoutes;
