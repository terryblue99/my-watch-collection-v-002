import React from 'react'
import { Link } from 'react-router-dom'
import '../containers/App.css'
import logo from '../logo.jpg'

const Homepage = () => {
    
    return (
        <div className='container'>
            <header className='Homepage'>
                <img src={logo} alt='logo' className='Logo'/>
                <div className='Homepage-container'>
                    <div>
                        <Link className='Home-button Button-text' to={{
                            pathname: `/login`
                        }}
                        > Log In
                        </Link>
                        
                        <Link className='Home-button Button-text' to={{
                            pathname: `/signup`
                        }}
                        > Sign Up
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Homepage
