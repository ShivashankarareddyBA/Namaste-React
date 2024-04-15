import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import RestaurantMenu from "./Component/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />

      {/* outlet will push this and alll the childerns coming accourdingly */}
      {/* if path is =/ */}
      {/* <Body /> */}
      {/* if path is = /about */}
      {/* <About /> */}
      {/* if path is = /contact */}
      {/* <Contact /> */}
      {/* we nned to push children route accordingly */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    //path is nothing but object
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", //resID is dynamic here
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//line 43 we're providing router configrations
