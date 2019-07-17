import React from 'react'
import '../containers/App.css'
import logo from '../img/logo.jpg'

const Homepage = ({ setScreen }) => {

    const addWatch = () => {
        setScreen('addWatch')
    }
    
    return (
        <header className='Homepage'>
            <img src={logo} alt='logo' align='middle' className='Homepage-logo'/>
            <div className='container'>
                <div>
                    <button onClick={addWatch} className='Homepage-button'>Start</button>
                </div>
            </div>
        </header>
    )
}

export default Homepage
