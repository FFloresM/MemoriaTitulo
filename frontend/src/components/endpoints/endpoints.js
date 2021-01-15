import axios from 'axios';
const API_URL = 'http://localhost:8000';
const username = 'francisco';
const password = 'fanda';
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')


export default class EndPoints{
    constructor(){}

    getClientes(){
        const url = `${API_URL}/clientes/`;
        return axios.get(url, {
            headers: {
                'Authorization': `Basic ${token}`
            },
        }).then(response => response.data);
    }

    getClientesByUrl(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }

    getCliente(pk){
        const url = `${API_URL}/clientes/${pk}`;
        return axios.get(url).then(response => response.data);
    }

    deleteCliente(cliente){
        const url = `${API_URL}/clientes/${cliente.id}`;
        return axios.delete(url);
    }
    createCliente(cliente){
        const url = `${API_URL}/clientes/`;
        return axios.post(url,cliente);
    }
    updateCliente(cliente){
        const url = `${API_URL}/clientes/${cliente.id}`;
        return axios.put(url,cliente);
    }
}