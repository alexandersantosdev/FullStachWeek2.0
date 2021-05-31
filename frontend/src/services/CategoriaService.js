import axios from 'axios';

const API_URL = 'http://localhost:8080';

class CategoriaService{
    
    getAllcategorias(){
        
        return axios.get(`${API_URL}/categorias`);
    }

    getOnecategorias(Codcategoria){
        return axios.get(`${API_URL}/categorias/${Codcategoria}`)
    }

    savecategoria(categoria){
        return axios.post(`${API_URL}/categorias`, categoria);
    }

    deletecategoria(Codcategoria){
        axios.delete(`${API_URL}/categorias/${Codcategoria}`);
    }
}

export default new CategoriaService();
