import React, { useState } from 'react'
import { useActions } from 'react-redux'
import './App.css'
import NavBar from '../components/NavBar'
import { addWatchAction } from '../actions/index'

const NewWatch = () => {

    const [form, setValues] = useState({
           watch_name: '',
           watch_maker: '',
           movement: '',
           band: '',
           model_number: '',
           case_measurement: '',
           water_resistance: '',
           complications: '',
           date_bought: '',
           cost: ''
    })

    const handleChange = (event) => {
        setValues({
                ...form,
                [event.target.name]: event.target.value           
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('@@@ add watch form: ', form)
        addWatchAction(form)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <NavBar />
                <div className='AddWatch'>
                    <h1 style={{color: 'green'}}>Add a watch</h1>
                    <br /> 
                    <input required 
                            type='text'
                            name='watch_name'
                            value={form.watch_name}
                            placeholder='Watch name'
                            onChange={handleChange}
                    />
                    <br /> 
                    <input required 
                            type='text'
                            name='watch_maker'
                            value={form.watch_maker}
                            placeholder='Watch maker'
                            onChange={handleChange}
                    />
                    <br />
                    <input type='text'
                            name='movement'
                            value={form.movement}
                            placeholder='Movement'
                            onChange={handleChange}
                    />
                    <br />
                    <input type='text'
                            name='band'
                            value={form.band}
                            placeholder='Band'
                            onChange={handleChange}
                    />
                    <br /> 
                    <input type='text'
                            name='model_number'
                            value={form.model_number}
                            placeholder='Model number'
                            onChange={handleChange}
                    />
                    <br /> 
                    <input type='text'
                            name='case_measurement'
                            value={form.case_measurement}
                            placeholder='Case measurement (e.g. 45mm)'
                            onChange={handleChange}
                    />
                    <br /> 
                    <input type='text'
                            name='water_resistance'
                            value={form.water_resistance}
                            placeholder='Water resistance'
                            onChange={handleChange}
                    />
                    <br /> 
                    <input type='text'
                            name='complications'
                            value={form.complications}
                            placeholder='Complications'
                            onChange={handleChange}
                    />
                    <br /> 
                    <input type='text'
                            name='date_bought'
                            value={form.date_bought}
                            placeholder='Date bought'
                            onChange={handleChange}
                    />
                    <br /> 
                    <input type='text'
                            name='cost'
                            value={form.cost}
                            placeholder='Cost (e.g. 199.99)'
                            onChange={handleChange}
                    />
                    <br />
                    <button type='submit'>Save watch</button>
                </div>
            </div>
        </form>
    )
}

export default NewWatch