import React from 'react';
import Form from '../static/Form/Form.jsx';
import Preload from '../static/PreLoader/Preload.jsx';
import Header from '../static/Header.jsx';
import './Login.css'
function Login(){
        return(
            <div className="wrapper_login">
                <div className="Login">
                    <div className="row">
                        <div className="">
                        <Header />
                        </div>
                    </div>
                    <div className="row">
                        <div className="">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Login;