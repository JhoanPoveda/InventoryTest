import axios from 'axios'

const InventorysApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/inventory/api/v1/inventory/'
}) 

export const getAllInventorys = async () =>{
    return InventorysApi.get('/');
}