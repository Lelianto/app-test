import React from "react";
import ReactDOM from "react-dom/client";
import "src/index.css";
import App from "src/App";
import reportWebVitals from "src/reportWebVitals";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  Store,
} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "src/stores/reducer";

const store: Store<CartState, CartAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
