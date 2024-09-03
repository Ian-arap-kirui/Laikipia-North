import React from "react";
import lazyWithDelay from "./lazyWithDelay";
import { constituencyData } from "../utils/data"; // Update with the correct path
import ServiceMembers from "../pages/Services/ServiceMembers";
import ServiceProposals from "../pages/Services/ServiceProposals";
import ServiceDisbursments from "../pages/Services/ServiceDisbursments";
import ServiceProjects from "../pages/Services/ServiceProjects";
import ServiceAllocations from "../pages/Services/ServiceAllocations";
import SingleServiceProject from "../pages/Services/SingleServicePage/SingleServiceProject";
import ServiceEvents from "../pages/Services/ServiceEvents";
import SingleServiceEvent from "../pages/Services/SingleServicePage/SingleServiceEvent";

const HomePage = lazyWithDelay(() => import("../pages/Home/Home"), 3500);
const AboutUsPage = lazyWithDelay(
  () => import("../pages/AboutUs/AboutUs"),
  3000
);
const WardsPage = lazyWithDelay(() => import("../pages/Wards/Wards"), 3000);
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
const SingleWardPage = lazyWithDelay(
  () => import("../pages/Wards/SingleWardPage/SingleWardPage"),
  2000
);
const SingleEventPage = lazyWithDelay(
  () => import("../pages/Events/SingleEvent"),
  2000
);

const ServiceAllocationsPage = lazyWithDelay(
  () => import("../pages/Services/ServiceAllocations"),
  1500
);
const ServiceProjectsPage = lazyWithDelay(
  () => import("../pages/Services/ServiceProjects"),
  1500
);
const ServiceDisbursmentsPage = lazyWithDelay(
  () => import("../pages/Services/ServiceDisbursments"),
  1500
);
const ServiceProposalsPage = lazyWithDelay(
  () => import("../pages/Services/ServiceProposals"),
  1500
);
const ServiceMembersPage = lazyWithDelay(
  () => import("../pages/Services/ServiceMembers"),
  1500
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
    path: "/wards",
    element: <WardsPage />,
  },
  {
    path: "/wards/:wardName",
    element: <SingleWardPage />,
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
    children: [
      {
        path: "allocations",
        element: <ServiceAllocations services={constituencyData[0].services} />,
      },
      {
        path: "projects",
        element: <ServiceProjects services={constituencyData[0].services} />,
      },
      {
        path: "projects/:projectTitle",
        element: (
          <SingleServiceProject services={constituencyData[0].services} />
        ),
      },
      {
        path: "events",
        element: <ServiceEvents services={constituencyData[0].services} />,
      },
      {
        path: "events/:eventTitle",
        element: <SingleServiceEvent services={constituencyData[0].services} />,
      },

      {
        path: "disbursments",
        element: (
          <ServiceDisbursments services={constituencyData[0].services} />
        ),
      },
      {
        path: "proposals",
        element: <ServiceProposals services={constituencyData[0].services} />,
      },
      {
        path: "members",
        element: <ServiceMembers services={constituencyData[0].services} />,
      },
    ],
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
