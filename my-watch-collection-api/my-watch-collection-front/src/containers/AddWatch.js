import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import NavBar from '../components/NavBar'
import { addWatchAction } from '../actions/index'

class AddWatch extends Component {

   state = {
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
   }

   handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })                         
   }

   handleSubmit = (event) => {
        event.preventDefault()
        // Destructure addWatchAction and history from the components prop
        const { addWatchAction } = this.props
        // Create the watch with the Redux action
        addWatchAction(this.state)
   }

   handleBack = () => {
          // redirect to /watches route
          const { history } = this.props
          history.push('/watches')    
   }

   render() {

      return (
        <div>

           <NavBar /> 
           <button onClick={this.handleBack} className='Back-button'>Back</button>
           
           <form onSubmit={this.handleSubmit}>
                <div className='AddWatch'>
                   <h1 style={{color: 'green'}}>Add a watch</h1>
                   <br /> 
                   <input  required 
                        type='text'
                        name='watch_name'
                        placeholder='Watch name'
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  required 
                        type='text'
                        name='watch_maker'
                        placeholder='Watch maker'
                        onChange={this.handleChange}
                   />
                   <br />
                   <input  type='text'
                        name='movement'
                        placeholder='Movement'
                        onChange={this.handleChange}
                   />
                   <br />
                   <input  type='text'
                        name='band'
                        placeholder='Band'
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='model_number'
                        placeholder='Model number'
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='case_measurement'
                        placeholder='Case measurement (e.g. 45mm)'
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='water_resistance'
                        placeholder='Water resistance'
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='complications'
                        placeholder='Complications'
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='date_bought'
                        placeholder='Date bought'
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='cost'
                        placeholder='Cost (e.g. 199.99)'
                        onChange={this.handleChange}
                   />
                   <br />
                   <button className='Save-button' type='submit'>Save watch</button>
                </div>
           </form>
        </div>
      )
   } 
}

export default connect(null, { addWatchAction })(AddWatch)
