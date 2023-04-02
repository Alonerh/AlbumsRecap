import { useParams, useNavigate, Link } from "react-router-dom"
import { api } from "../api";
import { useEffect, useState } from "react";
import { Albums } from "../types/Album";
import { Photos } from "../types/Photos";

export const AlbumItem = ()=>{
    const navigate = useNavigate();
    const params = useParams();

    const[albumsPhotos, setAlbumsPhotos]=useState<Albums>();
    const[photos, setPhotos]=useState<Photos[]>([]);
    const[loading, setLoading] = useState(false);


    let teste = params.slug;

    useEffect(()=>{downloadPhotos(teste)}, [])


    const downloadPhotos = async(teste:string | undefined)=>{
        let json = await api.getAllAlbumsPhotos(teste);
        console.log(json);
        setAlbumsPhotos(json);
        let json2 = await api.getAllPhotos(teste);
        setPhotos(json2);
   }

    return (
        <div>
            <div className="m-3">Página sobre albúm número {params.slug}</div>
            <button 
                onClick={()=>navigate(-1)}
                className="m-2 p-2 bg-blue-400 rounded-full"
            >Voltar</button>
            <div>
                <div className="m-3 font-bold text-2xl">
                    {albumsPhotos?.title}
                </div>
                <div className="p-4 flex flex-wrap justify-center">
                    {photos.map((item, index)=>(
                        <Link to={`/photo/${item.id}`} key={index}>
                            <img src={item.thumbnailUrl} className="p-3 border"/>
                        </Link>
                    ))}
                </div>
            </div>
            
        </div>
    )
}