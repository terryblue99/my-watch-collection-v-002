import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core' // https://github.com/emotion-js/emotion'
import '../containers/App.css'
import logo from '../logo.jpg'

const Homepage = ({ setScreen }) => {
    
    return (
        <header className='Homepage'>
            <img src={logo} alt='logo' align='middle' className='logo'/>
            <div className='container'>
                <div>
                    <Link className='green-button' to={{
                        pathname: `/login`
                    }}
                    > Log In
                    </Link>
                    
                    <Link className='green-button' to={{
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
