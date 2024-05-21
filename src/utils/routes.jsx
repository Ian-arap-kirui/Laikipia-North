import lazyWithDelay from "./lazyWithDelay";

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

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/blogs",
    element: <BlogsPage />,
  },
  {
    path: "/services/:serviceId",
    element: <SingleServicePage />,
  },
  {
    path: "/projects/:projectId",
    element: <SingleProjectPage />,
  },
  {
    path: "/blogs/:blogId",
    element: <SingleBlogPage />,
  },
];

export default routes;
