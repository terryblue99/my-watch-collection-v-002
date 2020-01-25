import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../App.css'
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
        
        if (this.props.currentUser && this.props.currentUser.logged_in) {
            return RedirectTo('/dashboard')
        }
        
        return (

            <div className='container'>
                <header className='Login'>
                    { !this.props.location.state
                        ? <p className='Login-banner'>Log in to access your watches</p>
                        : <p className='Login-banner'>Log in to add your watches</p>
                    }
                    <img src={logo} alt='logo' className='Logo'/>
                    <div className='Login-container'>
                        <form id='Login-Form' onSubmit={this.handleSubmit}>
                            <div className='Register'>
                                <input autoFocus className='Login-input-element' required 
                                        type='email'
                                        name='email'
                                        placeholder='Enter your email'
                                        onChange={this.handleChange}
                                />
                                <br /> 
                                <input className='Login-input-element' required 
                                        type='password'
                                        name='password'
                                        placeholder='Enter your password'
                                        onChange={this.handleChange}
                                />
                                <br />
                                <button className='btn Login-button Button-text' type='submit'>Log In</button>
                                <Link className='btn Login-home-button Button-text' to={{pathname: `/`}}> 
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
