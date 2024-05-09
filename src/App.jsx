import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "./FormInfo";
import MyformContextProvider from "./context/MyformContextProvider";
import React from "react";
import RootElement from "./RootElement";

const App = () => {
  const router = createBrowserRouter([{
    path: "/",
    element: <RootElement />,
    children: [
      {
        path: "/",
        element: <Form />,
      },
    ],
  }]);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default App;
