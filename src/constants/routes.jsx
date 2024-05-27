import { lazy } from "react";
import Layout from "../components/Global/Layout";

const Home = lazy(() => import("../pages/Home"));
const ShopAll = lazy(() => import("../pages/ShopAll"));
const Men = lazy(() => import("../pages/Men"));
const Women = lazy(() => import("../pages/Women"));
const PacksAndGear = lazy(() => import("../pages/PacksAndGear"));
const Cart = lazy(() => import("../pages/Cart"));

export const routes = [
  {
    title: "Home Page",
    url: "/",
    page: <Home />,
  },
  {
    title: "Home Page",
    url: "/shop-all",
    page: <Layout pages={<ShopAll />} />,
  },
  {
    title: "Home Page",
    url: "/men",
    page: <Layout pages={<Men />} />,
  },
  {
    title: "Home Page",
    url: "/women",
    page: <Layout pages={<Women />} />,
  },
  {
    title: "Home Page",
    url: "/packs-and-gears",
    page: <Layout pages={<PacksAndGear />} />,
  },
  {
    title: "Home Page",
    url: "/cart",
    page: <Layout pages={<Cart />} />,
  },
];
