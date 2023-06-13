import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage, Projects, Contact } from "./pages";

export const StartLink = "/portfolio";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={StartLink} />
    },
    {
        path: StartLink,
        element: <HomePage />,
        errorElement: <div>Ooops, there're nothing</div>
    },
    {
        path: StartLink + "/projects",
        element: <Projects />,
    },
    {
        path: StartLink + "/contact",
        element: <Contact />,
    },
]);

export default AppRoutes;