import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'; 
import appStore from "../../utils/appStore"

it("should render Header component with a Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbtn=screen.getByRole("button");
  expect(loginbtn).toBeInTheDocument();


  // Add assertions to check if the Login Button is in the document
});
