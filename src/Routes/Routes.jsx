import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root"
import Home from '../Pages/Home';
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import Resister from "../Pages/Resister";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRoutes from "./PrivateRoutes";
import EstateDetails from "../Component/EstateDetails";
import InquiryForm from "../Pages/InquiryForm";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/estates.json')
            },{
                path:"/estate/:id",
                element:<PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
                loader:() => fetch('/estates.json')
            },
            {
                path:"/updateProfile",
                element:<PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path: "/inquiryForm",
                element: <InquiryForm></InquiryForm>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/resister",
                element:<Resister></Resister>
            }
        ]
    }
])

export default router;