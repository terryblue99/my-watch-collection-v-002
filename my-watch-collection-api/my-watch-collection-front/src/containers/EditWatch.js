import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './App.css'
import NavBar from '../components/NavBar'
import { editWatchAction } from '../actions/watches'

class EditWatch extends Component {
     
     state = {
       watchData: {
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
          cost: this.props.location.state.watch.cost,
          user_id: this.props.location.state.watch.user_id
       },
       image: null,
       backToDashboard: false
     }

     shouldComponentUpdate(nextProps, nextState) {
          // Prevent component re-render on a true state, but reset to false
          if(this.state.backToDashboard === true) {
               this.setState({
                    backToDashboard: false
               })
               return false
          }
          return true
     }

     handleChange = (event) => {
        this.setState({
          watchData: {
               ...this.state.watchData,
               [event.target.name]: event.target.value
           } 
        })                         
     }

     handleFile = (event) => {
          this.setState({
               image: event.target.files[0]   
          }) 
     }

     handleSubmit = (event) => {
        event.preventDefault()
        console.log('*** EditWatch handleSubmit image: ', this.state.image)
        event.preventDefault() 
        // Edit the watch
        const formData = new FormData()
        formData.append('watch_name', this.state.watchData.watch_name)
        formData.append('watch_maker', this.state.watchData.watch_maker)
        formData.append('movement', this.state.watchData.movement)
        formData.append('band', this.state.watchData.band)
        formData.append('model_number', this.state.watchData.model_number)
        formData.append('case_measurement', this.state.watchData.case_measurement)
        formData.append('water_resistance', this.state.watchData.water_resistance)
        formData.append('complications', this.state.watchData.complications)
        formData.append('date_bought', this.state.watchData.date_bought)
        formData.append('cost', this.state.watchData.cost)
        formData.append('user_id', this.state.watchData.user_id)
        if (this.state.image) {
          formData.append('image', this.state.image)
        }
        this.props.editWatchAction(formData, this.state.watchData)
     }

     handleBack = () => {
          this.setState({
               backToDashboard: true
          })
     }

     render() {
 
        if (this.state.backToDashboard) {
          return <Redirect to={{
                    pathname: '/dashboard'
               }}/>
        } 

        const watch = this.props.location.state.watch
      
          return (  
               <div className = 'Watch-form'>
                    <NavBar />
                    <button onClick={this.handleBack} className='Back-button'>Back to dashboard</button>
                    <br />
                    <form id='EditWatch-form' onSubmit={this.handleSubmit}>
                         <div className='EditWatch'>
                              <h1 style={{color: 'sienna'}}>Edit this watch</h1>
                              <br /> 
                              <input className='input-element' required 
                                   type='text'
                                   name='watch_name'
                                   defaultValue={watch.watch_name}
                                   placeholder=' Watch Name'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element' required 
                                   type='text'
                                   name='watch_maker'
                                   defaultValue={watch.watch_maker}
                                   placeholder=' Watch maker'
                                   onChange={this.handleChange}
                              />
                              <br />
                              <input className='input-element'  type='text'
                                   name='movement'
                                   defaultValue={watch.movement}
                                   placeholder=' Movement'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element'  type='text'
                                   name='complications'
                                   defaultValue={watch.complications}
                                   placeholder=' Complications'
                                   onChange={this.handleChange}
                              />
                              <br />
                              <input className='input-element'  type='text'
                                   name='band'
                                   defaultValue={watch.band}
                                   placeholder=' Band'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element'  type='text'
                                   name='model_number'
                                   defaultValue={watch.model_number}
                                   placeholder=' Model number'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element'  type='text'
                                   name='case_measurement'
                                   defaultValue={watch.case_measurement}
                                   placeholder=' Case measurement'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element'  type='text'
                                   name='water_resistance'
                                   defaultValue={watch.water_resistance}
                                   placeholder=' Water resistance'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element'  type='text'
                                   name='date_bought'
                                   defaultValue={watch.date_bought}
                                   placeholder=' Date bought'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element'  type='text'
                                   name='cost'
                                   defaultValue={watch.cost}
                                   placeholder=' Cost'
                                   onChange={this.handleChange}
                              />
                              <br />
                              <b style={{fontSize: '1rem', color: 'sienna'}}>Upload watch image</b>
                              <input className='input-element'  type='file'
                                   name='image'
                                   onChange={this.handleFile}
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