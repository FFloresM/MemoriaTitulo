import React, { Component } from 'react';
import EndPoints from '../endpoints/endpoints';

const endpoints = new EndPoints();

class ClienteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientes: [],
            nextPageURL: ''
        };
        this.nextPageURL = this.nextPage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        var self = this;
        endpoints.getClientes().then(function (result) {
            console.log(result);
            self.setState({
                clientes: result.results,
                nextPageURL: result.next
            })
        });
    }

    handleDelete(e,id) {
        var self = this;
        endpoints.deleteCliente({id: id}).then(() => {
            var newArr = self.state.clientes.filter(function(obj){
                return obj.id !== id;
            });
            self.setState({clientes: newArr})
        });
    }

    nextPage() {
        var self = this;
        endpoints.getClientesByUrl(this.state.nextPageURL).then((result) => {
            self.setState({customers: result.data, nextPageURL: result.nextlink})
        });
    }

    render() {
        return (
            <div className="lista--clientes">
                <table className="table">
                    <thead key="thead">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>email</th>
                            <th>dirección</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.clientes.map( c => 
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.nombre}</td>
                            <td>{c.telefono}</td>
                            <td>{c.email}</td>
                            <td>{c.direccion}</td>
                            <td>
                                <button onClick={(e)=> this.handleDelete(e,c.id)}>Eliminar</button>
                                <a href={"/clientes/" + c.id}>Actualizar</a>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick = {this.nextPage}>Siguiente</button>
            </div>
        )
    }
}

export default ClienteList;