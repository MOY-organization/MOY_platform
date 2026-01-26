import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layouts/app-layout";
import Home from "../pages/home/home";
import NotFound from "../pages/not-found";
import LoginPage from "@/pages/auth/login-page";
import PersonProfile from "@/pages/profile/person-profile";
import OrganizationProfile from "@/pages/profile/organization-profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/person-profile",
    element: <PersonProfile />,
  },
  {
    path: "/organization-profile",
    element: <OrganizationProfile />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
