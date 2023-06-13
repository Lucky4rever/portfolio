import { RouterProvider } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={AppRoutes} />
    </>
  )
}

export default App;
