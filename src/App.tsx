import { MainRoutes } from "./routes/MainRoutes";

const App = ()=>{
	return (
		<div>
			<div className="font-bold text-2xl mb-4">Galeria de fotos</div>
			<MainRoutes/>
		</div>
	)
}

/*
https://jsonplaceholder.typicode.com/albums
https://jsonplaceholder.typicode.com/albums/1
https://jsonplaceholder.typicode.com/albums/1/photos
https://jsonplaceholder.typicode.com/photos/1

Utilizar base no Axios
Utilizar rotas em objetos


*/

export default App;
