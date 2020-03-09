import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime";
import { Provider } from "react-redux";
import configureStore from "./state";

import App from "./components/App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
