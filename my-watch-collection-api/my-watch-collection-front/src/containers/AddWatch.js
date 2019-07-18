import React from 'react'
import './App.css'
import NavBar from '../components/NavBar'
import WatchesFetch from './WatchesFetch'

const addWatch = () => {
    alert('add watch')
}

const AddWatch = () => {
    return (
        <div>
            <NavBar />
            <div className='AddWatch'>
                <h1 style={{color: 'green'}}>Add a watch</h1>
                <br />
                <h2>Watch name</h2>
                <input />
                <h2>Watch maker</h2>
                <input />
                <h2>Movement</h2>
                <input />
                <h2>Band</h2>
                <input />
                <h2>Model number</h2>
                <input />
                <h2>Case measurement(e.g. <b style={{color: 'red'}}>45mm</b>)</h2>
                <input />
                <h2>Water resistance</h2>
                <input />
                <h2>Complications</h2>
                <input />
                <h2>Date bought</h2>
                <input />
                <h2>Cost(e.g. <b style={{color: 'red'}}>199.99</b>)</h2>
                <input />
                <br />
                <button onClick={addWatch}>Save watch</button>
            </div>
        </div>
    )
}

export default AddWatch