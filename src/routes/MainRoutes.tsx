import { useRoutes, useParams } from "react-router-dom";
import { Home } from "../pages/Home";
import { AlbumItem } from "../pages/AlbumItem";
import { Photo } from "../pages/Photo";

export const MainRoutes = () => {

    return useRoutes([
        {path: '/', element:<Home/>},
        {path:`/album/:slug`, element:<AlbumItem/>},
        {path:`/photo/:slug2`, element:<Photo/>},
    ]);
};