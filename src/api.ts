import axios from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
    getAllAlbums: async () => {
        let response = await axiosInstance.get(`${BASE}/albums`);
        return response.data;
    }
}