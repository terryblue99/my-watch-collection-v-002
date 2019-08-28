import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../../containers/App.css'
import logo from '../../logo.jpg'
import { logInAction } from "../../actions/currentUser.js"

class LogIn extends Component {

    state = {
        email: '',
        password: '' 
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.logInAction({ user: this.state })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })                         
    }
    
    render() {

        if (this.props.currentUser && this.props.currentUser.logged_in) {
            return (
                <Redirect to={{
                    pathname: '/dashboard'
                }} />
            )     
        }
 
        return (

            <div>
                <header className='Login'>
                    <p className='Login-banner'>Log in to access your data</p>
                    <img src={logo} alt='logo' className='Logo'/>
                    <div className='Login-container'>
                        <form id='Login-form' onSubmit={this.handleSubmit}>
                        <div className='Register'>
                                <br /> 
                                <input className='Input-element' required 
                                        type='email'
                                        name='email'
                                        placeholder=' Enter your email'
                                        onChange={this.handleChange}
                                />
                                <br /> 
                                <input className='Input-element' required 
                                        type='password'
                                        name='password'
                                        placeholder=' Enter your password'
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
      currentUser: state.currentUser
    } 
}

export default connect(mapStateToProps, { logInAction })(LogIn)
