import { createBrowserRouter } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

import Battles from "../pages/Battles";
import Profile from "../pages/Profile";
import Decks from "../pages/Decks";
import Store from "../pages/Store";

const router = createBrowserRouter([
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},

    {path: "/", element: <Battles />},
    {path: "/profile", element: <Profile />},
    {path: "/decks", element: <Decks />},
    {path: "/store", element: <Store />},
    
])


export default router;