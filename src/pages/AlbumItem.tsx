import { useParams, useNavigate } from "react-router-dom"

export const AlbumItem = ()=>{
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div>
            <button onClick={()=>navigate(-1)}>Voltar</button>
            <div>Página sobre albúm número {params.slug}</div>
        </div>
    )
}