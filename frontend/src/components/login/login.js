import React, { useState } from 'react';
import './login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    return(
        <div className="login-wrapper">
            <form action="/clientes">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        value={password} 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Recordar</label>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!validateForm()}>Aceptar</button>
            </form>
        </div>
    )
}