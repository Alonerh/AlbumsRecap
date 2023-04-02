import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { Photos } from "../types/Photos";
import { api } from "../api";


export const Photo = ()=>{
    const params = useParams();
    const navigate = useNavigate();
    const[photos, setPhotos]=useState<Photos>();

    let teste = params.slug2;
    useEffect(()=>{loadLastPhoto(teste)}, []);

    const loadLastPhoto = async(teste:string | undefined)=>{
        let json2 = await api.getLastPhoto(teste);
        setPhotos(json2);
    }

    return (
        <div>
            <div className="m-3 ">Página da foto especifica {params.slug2}</div>
            <button 
                onClick={()=>navigate(-1)}
                className="m-2 p-2 bg-blue-400 rounded-full"
            >Voltar</button>

            <div className="text-2xl ml-3">
                {photos?.title}
                <img src={photos?.url} alt="" className="m-3"/>
            </div>
        </div>
    )
}