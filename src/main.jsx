import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import TodoApp from "./app/TodoApp";
import TodoLayout from "./layouts/TodoLayout";
import PageNotFound from "./pages/404Page/PageNotFound";
import TodoPage from "./pages/TodoPage";
import "./styles/index.css";

/* BOOTSTRAP */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const routesV1 = createBrowserRouter([
  {
    path: "/",
    element: <TodoApp />,
    children: [
      {
        element: <TodoLayout />,
        children: [
          {
            element: <TodoPage />,
            index: true,
          },
        ],
      },

      { path: "page-not-found", element: <PageNotFound /> },
      { path: "*", element: <Navigate to="page-not-found" /> },
    ],
  },

  { path: "*", element: <Navigate to="/todo/dashboard" /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routesV1} />
  </Provider>
);
