import React from 'react'
import ReactDOM from 'react-dom/client'
import Screen1 from 'routes/Screen1'
import ErrorPageLanding from "containers/error-pages/error-page-landing";
import Screen2 from 'routes/Screen2';
import Screen3 from 'routes/Screen3';
import Screen4 from 'routes/Screen4';
import 'styles/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Screen1 />,
    errorElement: <ErrorPageLanding />,
  },
  {
    path: "screen2",
    element: <Screen2 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
