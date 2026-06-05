import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import List from "./list/List";
import Main from "./main/Main";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Building from "./building/Building";
import Chart from "./chart/Chart";
import Testing from './testing/Testing';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/building/:id",
    element: <Building />,
  },
  {
    path: "/chart",
    element: <Chart />,
  },
  {
    path: "/testing",
    element: <Testing />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
