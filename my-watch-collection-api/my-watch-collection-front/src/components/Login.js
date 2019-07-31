import React from 'react'
import '../containers/App.css'
import logo from '../img/logo.jpg'

const Login = () => {

    const doLogin = () => {
        alert('doLogin')
    }

    const handleChange = () => {
        alert('handleChange')
    }
    
    return (
        <header className='Login'>
            <img src={logo} alt='logo' align='middle' className='Homepage-logo'/>
            <div className='container'>
                <form id='Login-form' onSubmit={doLogin}>
                  <div className='doLogin'>
                    <h1 style={{color: 'green'}}>Log In</h1>
                    <br /> 
                    <input  required 
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            onChange={handleChange}
                    />
                    <br /> 
                    <input  required 
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            onChange={handleChange}
                    />
                    <br />
                    <input  required 
                            type='password'
                            name='confirm_password'
                            placeholder='Confirm your password'
                            onChange={handleChange}
                    />
                    <br />
                    <button className='Login-button' type='submit'>Login</button>
                  </div>
                </form>
            </div>
        </header>
    )
}

export default Login