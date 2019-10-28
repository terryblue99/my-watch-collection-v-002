import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './App.css'
import NavBar from '../components/NavBar'
import { editWatchAction } from '../actions/watchesActions'

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
          location: this.props.location.state.watch.location,
          user_id: this.props.location.state.watch.user_id
       },
       image: null,
       backToDashboard: false,
       formHasInput: false
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
           },
           formHasInput: true
        })                         
     }

     handleFile = (event) => {
          this.setState({
               image: event.target.files[0],
               formHasInput: true
          }) 
     }

     handleSubmit = (event) => {
        event.preventDefault() 
        if (this.state.formHasInput)
          {const date = this.state.watchData.date_bought
               if ((!date.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/gm)) &&
                   (!date.match(/(19\d{2})|(200\d)|(201[0-3])/))) {
                    alert('Date Bought/Gifted must be in the format yyyy-mm-dd or yyyy;\n e.g. 2019-09-30 or 2019')
                    return
               }
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
          formData.append('location', this.state.watchData.location)
          formData.append('user_id', this.state.watchData.user_id)
          if (this.state.image) {
               formData.append('image', this.state.image)
          }
          this.props.editWatchAction(formData, this.state.watchData)}
     }

     handleBack = () => {
          this.setState({
               backToDashboard: true
          })
     }

     render() {
 
          if (this.state.backToDashboard && this.state.formHasInput) {
               this.setState({
                    formHasInput: false
               })  
               return <Redirect to={{
                    pathname: '/dashboard',
                    state: {
                         from_EditWatch: true,
                         Edits: true
                    }
               }}/>
          } else if (this.state.backToDashboard) {
                         return <Redirect to={{
                         pathname: '/dashboard'
                    }}/>
          }

          const watch = this.props.location.state.watch
      
          return (  
               
               <div>
                    <NavBar />
                    <div className='container WatchForm-container'>
                         <button onClick={this.handleBack} className='btn Back-button Button-text'>Back to dashboard</button>
                         <form className='EditWatch-form' onSubmit={this.handleSubmit}>
                              <h1  className='WatchForm-header'>
                                   Edit this watch
                              </h1>
                              {watch.watch_name  
                                   ? <label>Watch Name</label>
                                   : null 
                              }
                              <input className='Input-element' required 
                                   type='text'
                                   name='watch_name'
                                   defaultValue={watch.watch_name}
                                   placeholder='Watch Name'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              {watch.watch_maker  
                                   ? <label>Watch Maker</label>
                                   : null 
                              }
                              <input className='Input-element' required 
                                   type='text'
                                   name='watch_maker'
                                   defaultValue={watch.watch_maker}
                                   placeholder='Watch Maker'
                                   onChange={this.handleChange}
                              />
                              <br />
                              {watch.movement  
                                   ? <label>Movement</label>
                                   : null 
                              }
                              <input className='Input-element'  
                                   type='text'
                                   name='movement'
                                   defaultValue={watch.movement}
                                   placeholder='Movement'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              {watch.complications  
                                   ? <label>Complications</label>
                                   : null 
                              }
                              <input className='Input-element'  
                                   type='text'
                                   name='complications'
                                   defaultValue={watch.complications}
                                   placeholder='Complications'
                                   onChange={this.handleChange}
                              />
                              <br />
                              {watch.band  
                                   ? <label>Band</label>
                                   : null 
                              }
                              <input className='Input-element'  
                                   type='text'
                                   name='band'
                                   defaultValue={watch.band}
                                   placeholder='Band'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              {watch.model_number
                                   ? <label>Model Number</label>
                                   : null 
                              }
                              <input className='Input-element'  
                                   type='text'
                                   name='model_number'
                                   defaultValue={watch.model_number}
                                   placeholder='Model Number'
                                   onChange={this.handleChange}
                              />
                              <br />
                              {watch.case_measurement  
                                   ? <label>Case Measurement</label>
                                   : null 
                              }
                              <input className='Input-element'  
                                   type='text'
                                   name='case_measurement'
                                   defaultValue={watch.case_measurement}
                                   placeholder='Case Measurement'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              {watch.water_resistance  
                                   ? <label>Water Resistance</label>
                                   : null 
                              }
                              <input className='Input-element'  
                                   type='text'
                                   name='water_resistance'
                                   defaultValue={watch.water_resistance}
                                   placeholder='Water Resistance'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              {watch.date_bought  
                                   ? <label>Date Bought/Gifted</label>
                                   : null 
                              }
                              <input className='Input-element' required 
                                   type='text'
                                   name='date_bought'
                                   defaultValue={watch.date_bought}
                                   placeholder='Date Bought/Gifted yyyy-mm-dd or yyyy (Req)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              {watch.cost  
                                   ? <label>Cost</label>
                                   : null 
                              }
                              <input className='Input-element'  
                                   type='number'
                                   step='0.01'
                                   name='cost'
                                   defaultValue={parseFloat(watch.cost).toFixed(2)}
                                   placeholder='Cost (e.g. 199.99)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              {watch.location  
                                   ? <label>Watch Location</label>
                                   : null 
                              }
                              <input className='Input-element'  
                                   type='text'
                                   name='location'
                                   placeholder='Watch Location'
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

export default connect(null, { editWatchAction })(EditWatch)