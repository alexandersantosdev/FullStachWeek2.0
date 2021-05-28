import axios from 'axios';

const API_URL = 'http://localhost:8080';

class InvestimentoService{
    
    async getAllInvestimentos(){
        
        return axios.get(`${API_URL}/investimentos`);
    }

    async getOneInvestimentos(Codinvestimento){
        return await axios.get(`${API_URL}/investimentos/${Codinvestimento}`)
    }

    async saveInvestimento(investimento){
        return await axios.post(`${API_URL}/investimentos`, investimento);
    }

    async deleteInvestimento(Codinvestimento){
        await axios.delete(`${API_URL}/investimentos/${Codinvestimento}`);
    }
}

export default new InvestimentoService();