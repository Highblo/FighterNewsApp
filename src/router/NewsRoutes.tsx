import { MySite } from "../components/pages/MySite";
import { News } from "../components/pages/News";
import { Page404 } from "../components/pages/Page404";

export const NewsRoutes = [
  {
    path: "/",
    exact: true,
    children: <News />,
  },
  {
    path: "/MySite",
    exact: false,
    children: <MySite />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
