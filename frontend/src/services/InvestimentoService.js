import axios from 'axios';

const API_URL = 'http://localhost:8080';

class InvestimentoService{
    
    getAllInvestimentos(){
        
        return axios.get(`${API_URL}/investimentos`);
    }

    getOneInvestimentos(Codinvestimento){
        return axios.get(`${API_URL}/investimentos/${Codinvestimento}`)
    }

    saveInvestimento(investimento){
        return axios.post(`${API_URL}/investimentos`, investimento);
    }

    deleteInvestimento(Codinvestimento){
        axios.delete(`${API_URL}/investimentos/${Codinvestimento}`);
    }
}

export default new InvestimentoService();
