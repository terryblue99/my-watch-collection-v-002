import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import NavBar from '../components/NavBar'
import { editWatchAction } from '../actions/watches'

class EditWatch extends Component {
     
     state = {
        id: this.props.location.state.watch.id,  
        watch_name: this.props.location.state.watch.watch_name,
        watch_maker: this.props.location.state.watch.watch_maker,
        movement: this.props.location.state.watch.movement,
        complications: this.props.location.state.watch.complications,
        band: this.props.location.state.watch.band,
        model_number: this.props.location.state.watch.model_number,
        case_measurement: this.props.location.state.watch.case_measurement,
        water_resistance: this.props.location.state.watch.water_resistance,
        date_bought: this.props.location.state.watch.date_bought,
        cost: this.props.location.state.watch.cost
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
      const fromWatchDetails = this.props.location.state.fromWatchDetails
      const watch = this.props.location.state.watch
      
        if (fromWatchDetails) {
          return (  
             <div>
               <NavBar />
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
        } else return null
     } 
}

export default connect(null, { editWatchAction })(EditWatch)