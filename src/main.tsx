import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./components/Router";
import {Provider} from "react-redux";
import {store} from "./infrastructure/redux/store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
)
