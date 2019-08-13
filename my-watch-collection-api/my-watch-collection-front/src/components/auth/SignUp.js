import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../containers/App.css'
import logo from '../../logo.jpg'
import { signUpAction } from "../../actions/currentUser.js"

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.password.length < 8 ) {
            alert('Password must be a minimum of 8 characters!')
            return
        }
        if (this.state.password !== this.state.password_confirmation) {
            alert('Password and password confirmation must be the same!')
            return
        }
        this.props.signUpAction({ user: this.state })
        this.props.history.push('/watches')
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
                            placeholder='Enter a password - 8 characters minimum'
                            onChange={this.handleChange}
                    />
                    <br />
                    <input className='input-element' required 
                            type='password'
                            name='password_confirmation'
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

export default connect(null, { signUpAction })(SignUp)