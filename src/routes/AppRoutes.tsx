import { useRoutes } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Login from "src/pages/Auth/Login";
import Products from "../pages/Products/Products";
const routes = [
  { path: NAVIGATION_ROUTES.DASHBOARD, element: <Products /> },
  {
    path: NAVIGATION_ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: NAVIGATION_ROUTES.PRODUCTS,
    element: <Products />,
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
