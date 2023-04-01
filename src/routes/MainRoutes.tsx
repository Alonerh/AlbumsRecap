import { useRoutes, useParams } from "react-router-dom";
import { Home } from "../pages/Home";
import { AlbumItem } from "../pages/AlbumItem";

export const MainRoutes = () => {

    return useRoutes([
        {path: '/', element:<Home/>},
        {path:`/album/:slug`, element:<AlbumItem/>},
    ]);
};