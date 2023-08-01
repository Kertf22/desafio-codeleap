import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/signIn";
import Home from "./pages/home";
import Main  from "./pages/main";

export const router = createBrowserRouter([
  {
    path: `/`,
    element: <Home />,
  },
  {
    path: `/signIn`,
    element: <SignIn />,
  },
  {
    path: `/main`,
    element: <Main />,
  },
]);
