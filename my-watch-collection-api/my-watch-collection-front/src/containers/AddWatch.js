import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './App.css'
import NavBar from '../components/NavBar'
import { addWatchAction } from '../actions/watchesActions'

class AddWatch extends Component {

     state = {
          watchData: {
               watch_name: '',
               watch_maker: '',
               movement: '',
               band: '',
               model_number: '',
               case_measurement: '',
               water_resistance: '',
               complications: '',
               date_bought: '',
               cost: '',
               location: '',
               user_id: this.props.currentUser.user.id
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
          // validate the 'Date bought/gifted' input
          const date = this.state.watchData.date_bought
          if (!date.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/gm)) {
               alert('Date bought/gifted must be in the format yyyy-mm-dd;\n e.g. 2019-09-30')
               return
          }
          // Create the watch
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
          formData.append('location', this.state.watchData.location)
          formData.append('user_id', this.state.watchData.user_id)
          if (this.state.image) {
               formData.append('image', this.state.image)
          }
          this.props.addWatchAction(formData, this.state.watchData)
          // Clear the form
          document.getElementById('AddWatch-form').reset()
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
      
          return (
               
               <div>
                    <NavBar /> 
                    <div className='container WatchForm-container'>
                         <button onClick={this.handleBack} className='btn Back-button Button-text'>Back to dashboard</button>
                         <form id='AddWatch-form' onSubmit={this.handleSubmit}>
                              <h1 className='WatchForm-header'>
                                   Add a watch
                              </h1>
                              <input className='Input-element' required 
                                   type='text'
                                   name='watch_name'
                                   placeholder='Watch name (Required)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element' required 
                                   type='text'
                                   name='watch_maker'
                                   placeholder='Watch maker (Required)'
                                   onChange={this.handleChange}
                              />
                              <br />
                              <input className='Input-element'  
                                   type='text'
                                   name='movement'
                                   placeholder='Movement'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element'  
                                   type='text'
                                   name='complications'
                                   placeholder='Complications'
                                   onChange={this.handleChange}
                              />
                              <br />
                              <input className='Input-element'  
                                   type='text'
                                   name='band'
                                   placeholder='Band'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element'  
                                   type='text'
                                   name='model_number'
                                   placeholder='Model number'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element'  
                                   type='text'
                                   name='case_measurement'
                                   placeholder='Case measurement (e.g. 45mm)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element' 
                                   type='text'
                                   name='water_resistance'
                                   placeholder='Water resistance (e.g. 200 meters)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element' required 
                                   type='text'
                                   name='date_bought'
                                   placeholder='Date bought/gifted (yyyy-mm-dd) (Req)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element'  
                                   type='text'
                                   name='cost'
                                   placeholder='Cost (e.g. 199.99)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element'  
                                   type='text'
                                   name='location'
                                   placeholder='Location (where watch is located)'
                                   onChange={this.handleChange}
                              />
                              <b className='WatchForm-upload-text'>
                                   Upload watch image</b>
                              <input className='Input-element Choose-image'  
                                   type='file'
                                   name='image'
                                   onChange={this.handleFile}
                              />
                              <button className='btn Save-button Button-text' type='submit'>Save watch</button>
                         </form>
                    </div>
               </div>
          )   
 
     } 
}

const mapStateToProps = (state) => { 
     return {
       currentUser: state.currentUser
     } 
 }

export default connect(mapStateToProps, { addWatchAction })(AddWatch)
