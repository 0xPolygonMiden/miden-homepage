import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import InitialPost from "../components/blogPosts/initial"; // Import the InitialPost component
import AssetPost from "../components/blogPosts/assets"; // Import the AssetPost component
import TransactionsPost from "../components/blogPosts/transactions"; // Import the TransactionsPost component
import PrivacyPost from "../components/blogPosts/privacy"; // Import the PrivacyPost component
import StatePost from "../components/blogPosts/state"; // Import the StatePost component

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
        path: "/privacy",
        element: <PrivacyPost />,
      },
      {
        path: "/state",
        element: <StatePost />,
      },
    ],
  },
]);

export default router;