import React, { Component } from 'react'
import '../../containers/App.css'
import logo from '../../logo.jpg'

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('*** SignUp handleSubmit state: ', this.state)
        if (this.state.password !== this.state.confirmPassword) {
            alert('Password and confirmed password must be the same!')
            return
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })                         
    }
    
    render() {
        return (
            <header className='Signup'>
            <img src={logo} alt='logo' align='middle' className='logo'/>
            <div className='container'>
                <form id='Signup-form' onSubmit={this.handleSubmit}>
                  <div className='register'>
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
                            placeholder='Enter a password'
                            onChange={this.handleChange}
                    />
                    <br />
                    <input className='input-element' required 
                            type='password'
                            name='confirmPassword'
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