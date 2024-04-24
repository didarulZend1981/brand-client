import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/coffee')

    
  },

 ]);

export default Routes;