import React ,{ useState } from 'react';
import './Form.css';

function Form () {

    let initialState = {
        email:'',
        password:'',
    }

    const [summit,setSummit] = useState(initialState);

    function handleChange(event){
        if(event.target.type==='email'){
            setSummit({
                ...summit,
                email:event.target.value,
            });  
        }
        if(event.target.type==='password'){
            setSummit({
                ...summit,
                password:event.target.value,
            }); 
        }
    }

    function goLogin(){

        let url = 'http://localhost:3001/login';

        let data = {
            email : summit.email,
            password : summit.password
        }

        fetch(url,{
            method : 'POST',
            body : JSON.stringify(data),
            headers :{
                'Content-type' : 'application/json'
            }
        })
       .then(res => res.json())
       .then((user) =>{
            if(!user.err){
                window.location.pathname='/home';
            }
        });
    }

    return (
        <div className="form">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_box</i>
                            <input id="email" type="email" className="validate" onChange={handleChange}/>
                            <label htmlFor="email">Email</label>
                            <span className="helper-text" data-error="Email side wrong" data-success="Email is right">my_email@(gmail,hotmail).com</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">create</i>
                            <input id="password" type="password" className="validate" onChange={handleChange}/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 center-align">
                        <button className="btn waves-effect waves-light" type="button" name="action" onClick={goLogin}>START
                            <i className="material-icons right">arrow_forward</i>
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
    
}

export default Form;
