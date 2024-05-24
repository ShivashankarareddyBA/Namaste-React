import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import RestaurantMenu from "./Component/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Grocery from "./Component/Grocery";
import { Provider } from "react-redux";
import AppStore from "./utils/appStore";
import Cart from "./Component/Cart";


const Grocery =lazy(()=> import("./Component/Grocery"));

const AppLayout = () => {
  return (
    <Provider  store={AppStore}>
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
    </Provider>
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
        path: "/grocery",
        element: <Suspense fallback={<h1>loading..</h1>}><Grocery /> </Suspense>,
      },

      {
        path: "/cart",
        element: <Cart/>
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
