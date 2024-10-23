import { createBrowserRouter } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {path: "/", element: <Cadastro />},
    {path: "/login", element: <Login />},
    
])


export default router;