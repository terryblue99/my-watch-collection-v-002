import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import NavBar from '../components/NavBar'
import { editWatchAction } from '../actions/watches'

class EditWatch extends Component {

     state = {
        id: this.props.currentWatch.id,  
        watch_name: this.props.currentWatch.watch_name,
        watch_maker: this.props.currentWatch.watch_maker,
        movement: this.props.currentWatch.movement,
        complications: this.props.currentWatch.complications,
        band: this.props.currentWatch.band,
        model_number: this.props.currentWatch.model_number,
        case_measurement: this.props.currentWatch.case_measurement,
        water_resistance: this.props.currentWatch.water_resistance,
        date_bought: this.props.currentWatch.date_bought,
        cost: this.props.currentWatch.cost
     }

     handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })                         
     }

     handleSubmit = (event) => {
        event.preventDefault()
        this.props.editWatchAction(this.state)
     }

     handleBack = () => {
          // redirect to /watches route
          window.location.href = '/watches'
     }

     render() {
      const watch = this.props.currentWatch
      
      return (
        <div>
           <button onClick={this.handleBack} className='Back-button'>Back to watch list</button>
           <br />
           <form id='EditWatch-form' onSubmit={this.handleSubmit}>
                <div className='EditWatch'>
                   <h1 style={{color: 'green'}}>Edit this watch</h1>
                   <br /> 
                   <input  required 
                        type='text'
                        name='watch_name'
                        defaultValue={watch.watch_name}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  required 
                        type='text'
                        name='watch_maker'
                        defaultValue={watch.watch_maker}
                        onChange={this.handleChange}
                   />
                   <br />
                   <input  type='text'
                        name='movement'
                        defaultValue={watch.movement}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='complications'
                        defaultValue={watch.complications}
                        onChange={this.handleChange}
                   />
                   <br />
                   <input  type='text'
                        name='band'
                        defaultValue={watch.band}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='model_number'
                        defaultValue={watch.model_number}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='case_measurement'
                        defaultValue={watch.case_measurement}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='water_resistance'
                        defaultValue={watch.water_resistance}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='date_bought'
                        defaultValue={watch.date_bought}
                        onChange={this.handleChange}
                   />
                   <br /> 
                   <input  type='text'
                        name='cost'
                        defaultValue={watch.cost}
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