import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.jpg'
import { logInAction } from "../../actions/currentUserActions.js"
import RedirectTo from '../../components/RedirectTo'

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
        
        if (this.props.currentUser?.logged_in) {
            return RedirectTo('/dashboard')
        }

        let isFromSignUp
        if (this.props.location.state?.isFromSignUp) 
            {isFromSignUp = this.props.location.state.isFromSignUp}
        
        return (

            <div className='container'>
                <header className='LogIn'>
                    { !isFromSignUp // not a new user
                        ? <p className='LogIn-banner Cornsilk-color Center-text'>Log in to access your watches</p>
                        : <p className='LogIn-banner Cornsilk-color Center-text'>Log in to add your watches</p>
                    }
                    <img src={logo} alt='logo' className='Logo'/>
                    <div className='LogIn-container'>
                        <form id='LogIn-Form'
                              onSubmit={this.handleSubmit}
                        >
                            <div className='Register Center-text'>
                                <div className='LogIn-element Cornsilk-color'>
                                    <label>Email: </label>
                                    <input autoFocus className='LogIn-input-element' required 
                                        type='email'
                                        name='email'
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <br /> 
                                <div className='LogIn-element Cornsilk-color'>
                                    <label>Password:</label>
                                    <input className='LogIn-input-element' required 
                                        type='password'
                                        name='password'
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <br />
                                <button className='btn LogIn-button Button-text' type='submit'>Log In</button>
                                <Link className='btn LogIn-home-button Button-text Center-text' to={{pathname: '/home'}}> 
                                    Home
                                </Link>
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