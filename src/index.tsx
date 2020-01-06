import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import {store, persistor} from "./config/store";
import { PersistGate } from "redux-persist/integration/react";

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <ConfigProvider locale={zhCN}>
            <App />
          </ConfigProvider>
        </HashRouter>
      </PersistGate>
    </Provider>,
    document.getElementById("root")
  );
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();

