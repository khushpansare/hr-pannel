import { Suspense } from "react";
import { useRoutes, Navigate, Outlet } from "react-router-dom";

// Import your components
import DashBoard from "../Layout/DashBoard";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <DashBoard>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashBoard>
      ),
      children: [
        {
          index: true,
          element: (
            <>
              <h1>IndexPage</h1>
            </>
          ),
        }, // Default page
        {
          path: "user",
          element: (
            <>
              <h1>UserPage</h1>
            </>
          ),
        }, // User management page
        {
          path: "products",
          element: (
            <>
              <h1>ProductsPage</h1>
            </>
          ),
        }, // Products page
        {
          path: "blog",
          element: (
            <>
              <h1>BlogPage</h1>
            </>
          ),
        }, // Blog page
      ],
    },
    {
      path: "login",
      element: (
        <>
          <h1>LoginPage</h1>
        </>
      ),
    }, // Login page
  ]);

  return routes;
};

export default AppRoutes;
