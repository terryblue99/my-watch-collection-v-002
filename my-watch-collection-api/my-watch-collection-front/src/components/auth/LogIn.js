import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../../containers/App.css'
import logo from '../../logo.jpg'
import { login } from "../../actions/currentUser.js"

class LogIn extends Component {

    state = {
        loginData: {
            email: '',
            password: ''
        },
        redirectToReferrer: false  // set to false for LogIn.js & SignUp.js to work properly!
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login({ user: this.state.loginData })
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
        if (this.props.user && this.props.user.logged_in) {
            return (
                <Redirect to={{
                    pathname: '/dashboard',
                    state: {
                        fromLogin: true,
                        user_id: this.props.user.user.id,
                        logged_in: this.props.user.logged_in
                    }
                }} />
            )     
        }
 
        return (
           <div>
            <p className='referToLogin'>Log in to access your data</p>
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

const mapStateToProps = (state) => { 
    return {
      user: state.currentUser
    } 
}

export default connect(mapStateToProps, { login })(LogIn)
