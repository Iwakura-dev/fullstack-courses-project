import { createBrowserRouter } from "react-router-dom";
import { AddCourse } from "../../views/AddCourse/AddCourse";
import { ErrorPage } from "../../views/ErrorPage/ErrorPage";
import { Auth } from "../../views/Auth/Auth";
import App from "../../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/addcourse",
    element: <AddCourse />,
  },
]);
