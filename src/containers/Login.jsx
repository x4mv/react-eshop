import React from 'react';
import '../styles/Login.scss';

const login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="./logos/Platzi_YardSale_Logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title">Create a new password</h1>
                <p className="subtitle"> Enter a new password for you account</p>
                <form action="/" className="form">
                    <label for="password" className="label">Password</label>
                    <input type="password" placeholder="*********" className="input input-password" id="password" />
                    <label for="new-password" className="label">Password</label>
                    <input type="password" placeholder="*********" className="input input-password" />
                    <input type="submit" value="Confirm" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
};

export default login;