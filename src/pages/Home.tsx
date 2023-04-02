import { useEffect, useState } from "react";
import { api } from "../api";
import { Albums } from "../types/Album";
import { Link } from "react-router-dom";

export const Home = ()=>{


	const[albums, setAlbums]=useState<Albums[]>([]);
	const[loading, setLoading]=useState(false);

	const loadAlbums = async()=>{
		setLoading(true);
		let json = await api.getAllAlbums();
		setLoading(false);
		setAlbums(json)
	};

    useEffect(()=>{
        loadAlbums()
    }, [])


    return (
        <div className="p-4">
			<div className="container">

				{loading &&
					<div>Carregando albums...</div>
				}

				{!loading && albums!=null &&
					<ul>
                        {albums.map((item, index)=>(		
                            <Link to={`/album/${index + 1}`} key={index}>
                                <li key={index} className="p-5 border hover:bg-sky-700">
                                    {item.title}
                                <br />
                                </li>
                            </Link>
                        ))}
					</ul>
                }
			</div>
		</div>
    )
}