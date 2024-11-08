import { createBrowserRouter } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

import Batalhas from "../pages/Batalhas";
import Perfil from "../pages/Perfil";
import Decks from "../pages/Decks";
import Loja from "../pages/Loja";
import Caminho from "../pages/Caminho";

const router = createBrowserRouter([
    {path: "/cadastro", element: <Cadastro />},
    {path: "/", element: <Login />},

    {path: "/batalhas", element: <Batalhas />},
    {path: "/caminho", element: <Caminho />},
    {path: "/perfil", element: <Perfil />},
    {path: "/decks", element: <Decks />},
    {path: "/loja", element: <Loja />},
    
])


export default router;