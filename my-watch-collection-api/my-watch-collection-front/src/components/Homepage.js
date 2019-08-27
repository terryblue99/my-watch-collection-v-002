import React from 'react'
import { Link } from 'react-router-dom'
import '../containers/App.css'
import logo from '../logo.jpg'

const Homepage = () => {
    
    return (
        <header className='Homepage'>
            <img src={logo} alt='logo' className='logo'/>
            <div className='container'>
                <div>
                    <Link className='home-button' to={{
                        pathname: `/login`
                    }}
                    > Log In
                    </Link>
                    
                    <Link className='home-button' to={{
                        pathname: `/signup`
                    }}
                    > Sign Up
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Homepage
