import React, { Component } from 'react'
import './App.css'
import logo from '../logo.jpg'

class SignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
            <header className='Signup'>
            <img src={logo} alt='logo' align='middle' className='Homepage-logo'/>
            <div className='container'>
                <form id='Signup-form' onSubmit={this.handleSubmit}>
                  <div className='register'>
                    {/* <h1 style={{color: 'green'}}>Sign Up</h1> */}
                    <br /> 
                    <input className='input-element' required 
                            type='text'
                            name='firstName'
                            placeholder='Enter your first name'
                            onChange={this.handleChange}
                    />
                    <br /> 
                    <input className='input-element' required 
                            type='text'
                            name='lastName'
                            placeholder='Enter your last name'
                            onChange={this.handleChange}
                    />
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
                    <input className='input-element' required 
                            type='password'
                            name='password'
                            placeholder='Confirm your password'
                            onChange={this.handleChange}
                    />
                    <br />
                    <button className='Signup-button' type='submit'>Sign Up</button>
                  </div>
                </form>
            </div>
            </header>
        )
    }
}

export default SignUp