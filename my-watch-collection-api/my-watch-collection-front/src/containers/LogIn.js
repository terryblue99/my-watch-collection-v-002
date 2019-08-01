import React, { Component } from 'react'
import './App.css'
import logo from '../logo.jpg'

class LogIn extends Component {

    state = {
        email: '',
        password: ''
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
        return (
            <header className='Login'>
            <img src={logo} alt='logo' align='middle' className='Homepage-logo'/>
            <div className='container'>
                <form id='Login-form' onSubmit={this.handleSubmit}>
                  <div className='register'>
                    {/* <h1 style={{color: 'green'}}>Log In</h1> */}
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
        )
    }
}

export default LogIn
