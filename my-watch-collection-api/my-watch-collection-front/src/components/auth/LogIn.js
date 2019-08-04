import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../../containers/App.css'
import logo from '../../logo.jpg'
import fakeAuth from './fakeAuth'
import { login } from "../../actions/currentUser.js"

class LogIn extends Component {

    state = {
        loginData: {
            email: '',
            password: ''
        },
        redirectToReferrer: true  // set to false when LogIn.js & SignUp.js completed!
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fakeAuth.authenticate(() => {
            console.log('*** LogIn handleSubmit this: ', this)
            this.setState({
                redirectToReferrer: true
            })
        }) 
        login(this.state.loginData)
    }

    handleChange = (event) => {
        this.setState({
            loginData: {
                ...this.state.loginData,
                [event.target.name]: event.target.value
            }   
        })                         
    }
    
    render() {

        // Authenticate the referrer (from) screen and get the path for redirect
        const { redirectToReferrer } = this.state.redirectToReferrer
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        if (redirectToReferrer === true) {
            return (
                <Redirect to={ from } /> 
            )
        }

        return (
           <div>
            {this.state.redirectToReferrer === false ? 
                <div>
                    <p className='referToLogin'>You must log in to access {from.pathname}</p>
                </div>
                :
                <div>
                    <p className='referToLogin'>Log in to access your data</p>
                </div>
            }    
            <header className='Login'>
            <img src={logo} alt='logo' align='middle' className='logo'/>
            <div className='container'>
                <form id='Login-form' onSubmit={this.handleSubmit}>
                  <div className='register'>
                    <br /> 
                    <input className='input-element' required 
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            onChange={this.handleChange}
                    />
                    <br /> 
                    <input className='input-element' required 
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            onChange={this.handleChange}
                    />
                    <br />
                    <button className='Login-button' type='submit'>Log In</button>
                  </div>
                </form>
            </div>
            </header>
           </div> 
        )
    }
}

export default connect(null, { login })(LogIn)
