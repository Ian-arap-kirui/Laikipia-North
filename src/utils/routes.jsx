import React from "react";
import lazyWithDelay from "./lazyWithDelay";
import { constituencyData } from "../utils/data"; // Update with the correct path

const HomePage = lazyWithDelay(() => import("../pages/Home/Home"), 3500);
const AboutUsPage = lazyWithDelay(
  () => import("../pages/AboutUs/AboutUs"),
  3000
);
const ProjectsPage = lazyWithDelay(
  () => import("../pages/Projects/Projects"),
  2700
);
const ServicesPage = lazyWithDelay(
  () => import("../pages/Services/Services"),
  2400
);
const EventsPage = lazyWithDelay(() => import("../pages/Events/Events"), 2400);
const BlogsPage = lazyWithDelay(() => import("../pages/Blogs/Blogs"), 2000);
const SingleServicePage = lazyWithDelay(
  () => import("../pages/Services/SingleService"),
  2000
);
const SingleProjectPage = lazyWithDelay(
  () => import("../pages/Projects/SinlgeProject"),
  2000
);
const SingleBlogPage = lazyWithDelay(
  () => import("../pages/Blogs/SingleBlog"),
  2000
);
const SingleEventPage = lazyWithDelay(
  () => import("../pages/Events/SingleEvent"),
  2000
);

const routes = [
  {
    path: "/",
    element: <HomePage data={constituencyData} />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage data={constituencyData} />,
  },
  {
    path: "/projects",
    element: <ProjectsPage projects={constituencyData[0].projects} />,
  },
  {
    path: "/services",
    element: <ServicesPage services={constituencyData[0].services} />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/blogs",
    element: <BlogsPage />,
  },
  {
    path: "/services/:serviceId",
    element: <SingleServicePage services={constituencyData[0].services} />,
  },
  {
    path: "/projects/:projectId",
    element: <SingleProjectPage projects={constituencyData[0].projects} />,
  },
  {
    path: "/blogs/:blogId",
    element: <SingleBlogPage />,
  },
  {
    path: "/events/:eventTitle",
    element: <SingleEventPage />,
  },
];

export default routes;
