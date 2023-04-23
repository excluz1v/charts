import Home from "../../pages/Home/Home";
import {createBrowserRouter} from "react-router-dom";
import {Settings} from "../../pages/Settings";
import Layout from "../Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout>
            <Home />
        </Layout>,
    },
    {
        path: "/settings",
        element:<Layout>
            <Settings/>
        </Layout>,
    },
]);
