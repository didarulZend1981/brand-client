import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import AddToCard from "../components/AddToCard/AddToCard";
import UpdateToCard from "../components/UpdateToCard/UpdateToCard";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/coffee')
   
  },
  {
    path: "addToCard",
    element: <AddToCard></AddToCard>,
   
   
  },
  {
    path: "updateToCard/:id",
    element: <UpdateToCard></UpdateToCard>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
   


  },

  

 ]);

export default Routes;