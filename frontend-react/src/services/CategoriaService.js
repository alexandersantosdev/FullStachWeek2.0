import axios from 'axios';

const API_URL = 'http://localhost:8080';

class CategoriaService{
    
    async getAllcategorias(){
        
        return axios.get(`${API_URL}/categorias`);
    }

    async getOnecategorias(Codcategoria){
        return await axios.get(`${API_URL}/categorias/${Codcategoria}`)
    }

    async savecategoria(categoria){
        return await axios.post(`${API_URL}/categorias`, categoria);
    }

    async deletecategoria(Codcategoria){
        await axios.delete(`${API_URL}/categorias/${Codcategoria}`);
    }
}

export default new CategoriaService();