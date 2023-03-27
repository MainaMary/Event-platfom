import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";

const Home = React.lazy(()=> import('../pages/Home'))
const Error = React.lazy(() =>import('../pages/Error'))
const routesList = [
    {
        path: "/",
        component:<Home/>
    },
    {
        path: "*",
        component:<Error/>
    }
]
const AllRoutes = () =>{
    return <Routes>{routesList.map(path =><Route path={path.path} element={path.component}/>)}</Routes>
}
export default AllRoutes