import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../App.css'
import logo from '../../images/logo.jpg'
import { signUpAction } from "../../actions/currentUserActions.js"
import ClearForm from "../../components/ClearForm"
import SetFocus from "../../components/SetFocus"
import RedirectTo from '../../components/RedirectTo'

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
        // Clear the form
        ClearForm('Signup-Form')
        // Set focus on the email address
        SetFocus('Focus-SignUp-Email')
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })                         
    }
    
    render() {
       
        if (this.props.currentUser) {
            return RedirectTo('/login')    
        }

        return (
            <div>
                <header className='Signup'>
                    <img src={logo} alt='logo' className='Logo'/>
                    <div className='Signup-container'>
                        <form id='Signup-Form' onSubmit={this.handleSubmit}>
                            <div className='Register'>
                                <input autoFocus id='Focus-SignUp-Email' className='SignUp-input-element' required 
                                        type='email'
                                        name='email'
                                        placeholder='Enter your email'
                                        onChange={this.handleChange}
                                />
                                <br /> 
                                <input className='SignUp-input-element' required 
                                        type='password'
                                        name='password'
                                        placeholder='Enter a password - 8 characters minimum'
                                        onChange={this.handleChange}
                                />
                                <br />
                                <input className='SignUp-input-element' required 
                                        type='password'
                                        name='password_confirmation'
                                        placeholder='Confirm your password'
                                        onChange={this.handleChange}
                                />
                                <br />
                                <button className='btn Signup-button Button-text' type='submit'>Sign Up</button>
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

export default connect(mapStateToProps, { signUpAction })(SignUp)