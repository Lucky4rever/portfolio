import { createBrowserRouter } from "react-router-dom";
import { HomePage, Projects, Contact } from "./devPages";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <div>Ooops, there're nothing</div>
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
]);

export default AppRoutes;