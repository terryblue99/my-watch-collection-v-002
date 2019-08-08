import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import NavBar from '../components/NavBar'
import { addWatchAction } from '../actions/watches'
import GetWatches from './GetWatches'


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
               user_id: this.props.location.state.user_id
          },
          backToWatchList: false
     }

     shouldComponentUpdate(nextProps, nextState) {
          // Prevent component re-render on a true state, but reset to false
          if(this.state.backToWatchList === true) {
               this.setState({
                    backToWatchList: false
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

     handleSubmit = (event) => { 
        event.preventDefault() 
        // Create the watch
        this.props.addWatchAction(this.state.watchData)
        // Clear the form
        document.getElementById('AddWatch-form').reset()
     }

     handleBack = () => {
          this.setState({
               backToWatchList: true
          })
     }

     render() {  
          if (this.state.backToWatchList) {
               return <GetWatches user_id={this.props.user.user.id}
                                  logged_in={this.props.user.logged_in}
                                  />
          } 
          
          const fromList = this.props.location.state.fromList

          if (fromList) {
               return (
                    <div>
                         <NavBar /> 
                         <button onClick={this.handleBack} className='Back-button'>Back to watch list</button>
                         <form id='AddWatch-form' onSubmit={this.handleSubmit}>
                              <div className='AddWatch'>
                              <h1 style={{color: 'green'}}>Add a watch</h1>
                              <br /> 
                              <input className='input-element' required 
                                   type='text'
                                   name='watch_name'
                                   placeholder='Watch name'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element' required 
                                   type='text'
                                   name='watch_maker'
                                   placeholder='Watch maker'
                                   onChange={this.handleChange}
                              />
                              <br />
                              <input className='input-element'  type='text'
                                   name='movement'
                                   placeholder='Movement'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element'  type='text'
                                   name='complications'
                                   placeholder='Complications'
                                   onChange={this.handleChange}
                              />
                              <br />
                              <input className='input-element'  type='text'
                                   name='band'
                                   placeholder='Band'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element'  type='text'
                                   name='model_number'
                                   placeholder='Model number'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element'  type='text'
                                   name='case_measurement'
                                   placeholder='Case measurement (e.g. 45mm)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element'  type='text'
                                   name='water_resistance'
                                   placeholder='Water resistance'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element'  type='text'
                                   name='date_bought'
                                   placeholder='Date bought'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='input-element'  type='text'
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
          } else return null
     } 
}

const mapStateToProps = (state) => { 
     return {
       user: state.currentUser
     } 
 }

export default connect(mapStateToProps, { addWatchAction })(AddWatch)
