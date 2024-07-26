import axios from 'axios'

const InventorysApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/inventory/api/v1/inventory/'
}) 

export const getAllInventorys = async () =>{
    return InventorysApi.get('/');
}

export const createInventory = async (inventoryData) =>{
    return InventorysApi.post('/', inventoryData);
}

export const deliveryInventory = async (inventoryId, data) => {
    return InventorysApi.patch(`/${inventoryId}/`, data);
  };

const ProductTypeApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/inventory/api/v1/productType/'
}) 

export const getAllProductsType = async () =>{
    return ProductTypeApi.get('/');
}

export const createProductsType = async (data) =>{
    return ProductTypeApi.post('/', data);
}
