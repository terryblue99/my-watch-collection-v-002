import React from 'react'
import '../containers/App.css'
import logo from '../logo.jpg'

const signLogIn = () => {
    alert('Sign Up or Log In')
}

const Homepage = ({ setScreen }) => {
    
    return (
        <header className='Homepage'>
            <img src={logo} alt='logo' align='middle' className='Homepage-logo'/>
            <div className='container'>
                <div>
                    <button onClick={signLogIn} className='Homepage-button'>Start</button>
                </div>
            </div>
        </header>
    )
}

export default Homepage
