import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { User } from "../../classes/user";

class Nav extends Component<{user: User}> {
  state = {
    redirect: false
  }

  handleCLick = () => {
    localStorage.clear();
    this.setState({
      redirect: true
    })
  }

  render() {
    if(this.state.redirect){
      return <Redirect to={'/login'} />
    }
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company name</a>
        <ul className="my-2 my-md-0 mr-md-3">
            <Link to={'/profile'} className="p-2 text-white">{this.props.user.name}</Link>
            <a href="" className="p-2 text-white" onClick={this.handleCLick}>Sign out</a>
        </ul>    
      </nav>  
    )
  }
  
}

// @ts-ignore
export default connect(state => ({user: state.user}))(Nav);