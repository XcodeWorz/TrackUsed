import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  state = {
    email : '' ,
    password : '',
    redirectToReferrer : false
 };

 handleChange = (event)=> {
  this.setState({
      [event.target.name] : event.target.value

  });
}
handleSubmit = (event) => {
  event.preventDefault();

  const user = {
    email : this.state.email,
    password : this.state.password
  };

if(this.state.email && this.state.password) {
  axios.post(`https://reqres.in/api/login`,user)
  .then((response) => {
    let userresponse = response;
    console.log(userresponse.data);
    if(userresponse) {
    sessionStorage.setItem('data',JSON.stringify(userresponse));
    this.setState({redirectToReferrer: true});
    window.location.reload();
    }
  },this)
  .catch((error) => alert(error))

  }
}

  render(){
    if (this.state.redirectToReferrer){
      return (
      <Redirect to={'/list'}/>
      )
    }
    if (sessionStorage.getItem('data')){
      return (
      <Redirect to={'/list'}/>
      )
    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">

        </div>
      </div><br /><br /><br />
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
          <form onSubmit={this.handleSubmit} id="contact-form" className="form">
          <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
                placeholder="Email"
                tabIndex={2}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
                placeholder="Password"
                tabIndex={1}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-start-order">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  }
};

export default Login;