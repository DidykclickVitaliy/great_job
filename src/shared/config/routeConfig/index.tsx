import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

enum AppRoutes {
  MAIN = "/",
  ABOUT = "/about",
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath["/"],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath["/about"],
    element: <AboutPage />,
  },
};
