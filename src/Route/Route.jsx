import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import ServicesDetails from "../Pages/Services/ServicesDetails";
import ProcedOut from "../Pages/ProcedOut";
import SignUp from "../Pages/Login/SignUp";
import Login from "../Pages/Login/Login";
import About from "../Pages/Home/About";
import Testimonial from "../Components/Testimonial/Testimonial";
import Cart from "../Pages/Services/Cart/Cart";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: <Testimonial></Testimonial>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            {" "}
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "servicesdetails/:id",
        element: (
          <PrivateRoute>
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/proced/:id",
        element: (
          <PrivateRoute>
            <ProcedOut></ProcedOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
