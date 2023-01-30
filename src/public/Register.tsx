import React, {Component, SyntheticEvent} from "react";
import './Public.css';
import axios from "axios";
import { Redirect } from "react-router-dom";

class Register extends Component{
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';
    role = '';
    state = {
        redirect: false
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('http://localhost:8000/api/register', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm,
            role: '3' 
        });

        this.setState({
            redirect: true
        })
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={'/login'} />;
        }
        
        return (
            <div>
                <main className="form-signin w-100 m-auto" onSubmit={this.submit}>
                    <form className="form-signin">
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" required onChange={e => this.first_name = e.target.value} />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" required onChange={e => this.last_name = e.target.value} />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" required onChange={e => this.email = e.target.value} />
                        <label htmlFor="inputEmail">Email Address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" required onChange={e => this.password = e.target.value} />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="passwordConfirm" placeholder="Password Confirm" required onChange={e => this.password_confirm = e.target.value} />
                        <label htmlFor="passwordConfirm">Password Confirm</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    </form>
                </main>
            </div>
        );
    }
}

export default Register;