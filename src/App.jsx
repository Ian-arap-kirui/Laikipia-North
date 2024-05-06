import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import { Suspense } from "react";
import Projects from "./pages/Projects/Projects";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <>error</>,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
      ],
    },
  ]);
  return (
    <Suspense fallback={<>loading....</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
