import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Auth/Login";
import AuthLayout from "./layout/AuthLayout";
import Register from "./Auth/Register";
import { useSelector } from "react-redux";

import RootLayout from "./layout/RootLayout";
import Links from "./pages/Links/Links";
import ProfileDetails from "./pages/ProfileDetails/ProfileDetails";

function App() {
  const loggedIn = useSelector((state: any) => state.auth).loggedIn;

  const routes = createBrowserRouter([
    loggedIn
      ? {
          path: "/",
          element: <RootLayout />,
          children: [
            { index: true, element: <Links /> },
            { path: "/profile-details", element: <ProfileDetails /> },
          ],
        }
      : {
          path: "/",
          element: <AuthLayout />,
          children: [
            { index: true, element: <Login /> },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
