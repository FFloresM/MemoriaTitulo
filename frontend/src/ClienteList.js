import React, { Component, component } from 'react';
import EndPoints from './endpoints';

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
            self.setState({clientes: result.data, nextPageURL: result.nextlink})
        });
    }

    handleDelete(e,pk) {
        var self = this;
        endpoints.deleteCliente({pk: pk}).then(() => {
            var newArr = self.state.clientes.filter(function(obj){
                return obj.pk != pk;
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
                        <tr key={c.pk}>
                            <td>{c.nombre}</td>
                            <td>{c.telefono}</td>
                            <td>{c.email}</td>
                            <td>{c.direccion}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ClienteList;