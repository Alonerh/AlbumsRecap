import axios from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
    getAllAlbums: async () => {
        let response = await axiosInstance.get(`${BASE}/albums`);
        return response.data;
    },
    getAllAlbumsPhotos: async (params:string | undefined)=>{
        let response = await axiosInstance.get(`${BASE}/albums/${params}`);
        return response.data;
    },
    getAllPhotos: async(params:string | undefined)=>{
        let response = await axiosInstance.get(`${BASE}/albums/${params}/photos`);
        return response.data;
    },
    getLastPhoto: async(params: string | undefined)=>{
        let response = await axiosInstance.get(`${BASE}/photos/${params}`);
        return response.data;
    }
}