import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../../containers/App.css'
import logo from '../../logo.jpg'
import fakeAuth from './fakeAuth'

class LogIn extends Component {

    state = {
        email: '',
        password: '',
        redirectToReferrer: false
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({
                redirectToReferrer: true
            })
        })   
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('*** state: ', this.state)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })                         
    }
    
    render() {

        // Authenticate the referrer (from) screen
        const { redirectToReferrer } = this.state.redirectToReferrer
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        if (redirectToReferrer === true) {
            return (
                <Redirect to={ from } /> 
            )
        }

        return (
           <div>
               {console.log('*** redirectToReferrer: ', this.state.redirectToReferrer)}
            {this.state.redirectToReferrer === false ? 
                <div>
                    <p className='referToLogin'>You must log in to access {from.pathname}</p>
                </div>
                :
                null
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

export default LogIn
