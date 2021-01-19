import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom';
import { Route } from  'react-router-dom';

import ClienteList  from  '../clientes/ClienteList';
import  ClienteCreateUpdate from '../clientes/ClienteCreateUpdate';
import Login from '../login/login';
import Dashboard from '../dashboard/dashboard';
import  './App.css';

const  BaseLayout  = () => (
    
  <div  className="container-fluid">
      <nav  className="navbar navbar-expand-lg navbar-light bg-light">
          <a  className="navbar-brand" href='/dashboard'>Dashboard</a>
          <button  className="navbar-toggler"  type="button"  data-toggle="collapse"  data-target="#navbarNavAltMarkup"  aria-controls="navbarNavAltMarkup"  aria-expanded="false"  aria-label="Toggle navigation">
          <span  className="navbar-toggler-icon"></span>
      </button>
      <div  className="collapse navbar-collapse"  id="navbarNavAltMarkup">
          <div  className="navbar-nav">
              <a  className="nav-item nav-link"  href="/clientes">CLIENTES</a>
              <a  className="nav-item nav-link"  href="/clientes/:pk">CREAR CLIENTE</a>
          </div>
      </div>
      </nav>
      <div  className="content">
          <Route  path="/login"  exact  component={Login}  />
          <Route  path="/clientes/:pk"  component={ClienteCreateUpdate}  />
          <Route  path="/clientes/"  exact  component={ClienteList}  />
          <Route path="/dashboard" exact component={Dashboard} />
      </div>
  </div>
  )

  class  App  extends  Component {

    render() {
        return (
        <BrowserRouter>
            <BaseLayout/>
        </BrowserRouter>
        );
    }
}

export  default  App;