import React, { Component } from 'react';
import EndPoints from '../endpoints/endpoints';

const endpoints = new EndPoints(); 

class ClienteCreateUpdate extends Component {
    constructor(props) {
        super(props);
        this.refs= React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const { match: {params} } = this.props;
        if (params && params.id) {
            this.handleUpdate(params.id);
        }
        else {
            this.handleCreate();
        }
        event.preventDefault();
    }

    handleCreate(){
        endpoints.createCliente(
            {
                "nombre": this.refs.nombre,
                "rut": this.refs.rut, 
                "telefono": this.refs.telefono,
                "email": this.refs.email,
                "direccion": this.refs.direccion

            }).then((result)=>{
                alert("Cliente creado");
            }).catch(()=>{
                alert("hubo un error. Por favor chequear el formulario.");
            });
    }

    handleUpdate(id){
        endpoints.updateCliente(
            {
                "id": this.refs.id,
                "nombre": this.refs.nombre,
                "rut": this.refs.rut,
                "telefono": this.refs.telefono,
                "email": this.refs.email,
                "direccion": this.refs.direccion
            }
        ).then((result)=>{
            alert("datos de cliente actualizados");
        }).catch(()=>{
            alert("hubo un error.");
        });
    }

    componentDidMount(){
        const { match: { params } } =  this.props;
        if(params  &&  params.id)
        {
            endpoints.getCliente(params.id).then((c)=>{
                this.refs.nombre.value  =  c.nombre;
                this.refs.rut.value = c.rut;
                this.refs.email.value  =  c.email;
                this.refs.telefono.value  =  c.telefono;
                this.refs.direccion.value  =  c.direccion;
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="from-group">
                <label>
                    Nombre:</label>
                    <input className="form-control" type="text" ref="nombre" />

                <label>
                    Rut:</label>
                    <input className="form-control" type="text" ref='rut' />

                <label>
                    Teléfono:</label>
                    <input className="form-control" type="text" ref='telefono' />

                <label>
                    Email:</label>
                    <input className="form-control" type="text" ref='email' />

                <label>
                    Dirección:</label>
                    <input className="form-control" type="text" ref='direccion' />

                <input className="btn btn-primary" type="submit" value="Submit" />

            </div>

            </form>
        );
    }
}

export default ClienteCreateUpdate;