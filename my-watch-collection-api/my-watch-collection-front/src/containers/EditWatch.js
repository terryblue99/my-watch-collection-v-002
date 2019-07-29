import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import NavBar from '../components/NavBar'
import { editWatchAction } from '../actions/index'

class EditWatch extends Component {

     state = {
        watch_id: this.props.id,
        watch_name: this.props.watch_name,
        watch_maker: this.props.watch_maker,
        movement: this.props.movement,
        band: this.props.band,
        model_number: this.props.model_number,
        case_measurement: this.props.case_measurement,
        water_resistance: this.props.water_resistance,
        complications: this.props.complications,
        date_bought: this.props.date_bought,
        cost: this.props.cost
     }

     handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })                         
     }

     handleSubmit = (event) => {
        event.preventDefault()
        // Destructure addWatchAction from the component props
        const { editWatchAction } = this.props
        // Create the watch with the Redux action
        editWatchAction(this.state)
        // Clear the form
        // document.getElementById('EditWatch-form').reset()
     }

     handleBack = () => {
          // redirect to /watches route
          const { history } = this.props
          history.push('/watches')  
          // window.location.href = '/watches'
     }

     render() {
      console.log('*** EditWatch id: ', this.props)
      return (
        <div>
           <NavBar /> 
           <button onClick={this.handleBack} className='Back-button'>Back to watch list</button>
           
           <form id='EditWatch-form' onSubmit={this.handleSubmit}>
                <div className='EditWatch'>
                   <h1 style={{color: 'green'}}>Edit a watch</h1>
                   <br /> 
                   <input  required 
                        type='text'
                        name='watch_name'
                        value={this.props.watch_name}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  required 
                        type='text'
                        name='watch_maker'
                        value={this.props.watch_maker}
                   />
                   <br />
                   <input  type='text'
                        name='movement'
                        value={this.props.movement}
                        onChange={this.handleChange}
                   />
                   <br />
                   <input  type='text'
                        name='band'
                        value={this.props.band}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='model_number'
                        value={this.props.model_number}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='case_measurement'
                        value={this.props.case_measurement}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='water_resistance'
                        value={this.props.water_resistance}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='complications'
                        value={this.props.complicationa}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='date_bought'
                        value={this.props.date_bought}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='cost'
                        value={this.props.cost}
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

export default connect(null, { editWatchAction })(EditWatch)