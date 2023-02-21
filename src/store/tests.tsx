
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Book.store";

//custom render that includes redux provider
export function providersRender(element: React.ReactElement) {
  const utils = render(
    <Provider store={store}>
      <BrowserRouter>{element}</BrowserRouter>
    </Provider>
  );
  return { store, ...utils };
}