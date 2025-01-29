import "./App.css";
import MainHome from "./pages/MainHome/MainHome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./component/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome />
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
