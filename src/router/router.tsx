import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SortingElement from "../pages/SortingElement";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <SortingElement/>
            }
        ]
    }
])