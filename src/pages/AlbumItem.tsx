import { useParams, useNavigate } from "react-router-dom"
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
            Filtro: 
            <div>Página sobre albúm número {params.slug}</div>
            <button onClick={()=>navigate(-1)}>Voltar</button>
            <div>
                <div>
                    {albumsPhotos?.title}
                </div>
                <div className="p-4 flex flex-wrap">
                    {photos.map((item, index)=>(
                        <img src={item.thumbnailUrl} key={index}/>
                    ))}
                </div>
            </div>
            
        </div>
    )
}