import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About"
import Contact from "./Component/Contact"
import Error from "./Component/Error"
import { createBrowserRouter,  RouterProvider  } from "react-router-dom";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      

          </div>
  );
};


  const appRouter = createBrowserRouter(
    [
      {
        //path is nothing but object
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>

      }
    ]
  )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
//line 43 we're providing router configrations
