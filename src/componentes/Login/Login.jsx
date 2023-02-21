import React from "react";
import './login.scss'
const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

                <h1 className="title">Crear nueva contraseña</h1>
                <p className="subtitle">Ingrese nueva contraseña para tu cuenta</p>

                <form action="/" className="form">
                    <label htmlFor="password" className="label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className="input input-password"
                    />

                    <label htmlFor="new-password" className="label">
                        Confirme Contraseña
                    </label>
                    <input
                        type="password"
                        id="new-password"
                        placeholder="*********"
                        className="input input-password"
                    />

                    <input
                        type="submit"
                        value="Confirm"
                        className="primary-button login-button"
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;
