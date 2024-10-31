import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import InitialPost from "../components/blogPosts/initial"; // Import the InitialPost component
import AssetPost from "../components/blogPosts/assets"; // Import the AssetPost component
import TransactionsPost from "../components/blogPosts/transactions"; // Import the TransactionsPost component
import PrivacyPost from "../components/blogPosts/privacyPost"; // Import the PrivacyPost component
import StatePost from "../components/blogPosts/state";
import Blogposts from "../components/blogPosts/blogOverview"; // Import the StatePost component
import Scaling from "../components/thesis/scaling";
import Privacy from "../components/thesis/privacy";
import Safety from "../components/thesis/safety";
import Roadmap from "../components/roadmap/roadmap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogposts",
        element: <Blogposts />,
      },
      {
        path: "/initial",
        element: <InitialPost />,
      },
      {
        path: "/assets",
        element: <AssetPost />,
      },
      {
        path: "/transactions",
        element: <TransactionsPost />,
      },
      {
        path: "/privacyPost",
        element: <PrivacyPost />,
      },
      {
        path: "/state",
        element: <StatePost />,
      },
      {
        path: "/scaling",
        element: <Scaling />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/safety",
        element: <Safety />,
      },
      {
        path: "/roadmap",
        element: <Roadmap />,
      },
    ],
  },
]);

export default router;