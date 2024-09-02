import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { Suspense } from "react";
import PageLoader from "./components/Loaders/PageLoader";
import routes from "./utils/routes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <>Error..</>,
      children: routes,
    },
  ]);

  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
