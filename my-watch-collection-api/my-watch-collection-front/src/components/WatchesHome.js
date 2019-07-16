import React from 'react'
import '../containers/App.css'
import logo from '../img/logo.jpg'


const WatchesHome = (props) => {
    console.log('***WatchesHome: ', props)
    return (
        <header className='Homepage'>
        <img src={logo} alt='logo' align='middle' className='Homepage-logo'/>
            <div className='container'>
                <div>
                    <button className='Homepage-button'>Start</button>
                </div>
            </div>
        </header>
    )
}

export default WatchesHome
