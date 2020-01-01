import { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'
import NavBar from './NavBar'
import { editWatchAction } from '../actions/watchesActions'
import RedirectTo from '../components/RedirectTo'
import RedirectToWithState from "./RedirectToWithState"
import DateValidation from "../components/DateValidation"

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
          notes: this.props.location.state.watch.notes,
          user_id: this.props.location.state.watch.user_id
       },
       image: null,
       backToDashboard: false,
       formHasInput: false
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
          if (this.state.formHasInput) {
               // validate the 'Date Bought/Gifted' input
               const validDate = DateValidation(this.state.watchData.date_bought)
               if (!validDate) {
                    alert('Date Bought/Gifted must be in the format yyyy-mm-dd, yyyy-mm or yyyy')
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
               formData.append('notes', this.state.watchData.notes)
               formData.append('user_id', this.state.watchData.user_id)   
               if (this.state.image) {
                    formData.append('image', this.state.image)
               }
               this.props.editWatchAction(formData, this.state.watchData.id)
          } else {
               alert('Nothing has been edited!')
          }  
     }

     handleBack = () => {
          this.setState({
               backToDashboard: true
          })
     }

     render() {
 
          if (this.state.backToDashboard && this.state.formHasInput) {
               this.setState({
                    formHasInput: false,
                    backToDashboard: false
               })  
               return RedirectToWithState(
                                             '/dashboard',
                                             {
                                                  from_EditWatch: true,
                                                  Edits: true
                                             }
                                         )
                    
          } 
          else if (this.state.backToDashboard) {
                    this.setState({
                         backToDashboard: false
                    }) 
                    return RedirectTo('/dashboard')
          }

          const watch = this.props.location.state.watch
      
          return (  
               
               <div>
                    <NavBar />

                    <div className='container WatchForm-container' css={css`
                        display: flex;
                        justify-content: space-between;
                        margin-top: 20px;

                        @media (max-width: 945px) {
                            flex-direction: column;
                        }
                    `}>
                    
                         <button onClick={this.handleBack} className='btn Back-button Button-text'>Back to dashboard</button>
                         
                         <form className='EditWatch-Form' onSubmit={this.handleSubmit}>
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
                                   ? <label>Case Measurement (e.g. 45mm)</label>
                                   : null 
                              }
                              <input className='Input-element'  
                                   type='text'
                                   name='case_measurement'
                                   defaultValue={watch.case_measurement}
                                   placeholder='Case Measurement (e.g. 45mm)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              {watch.water_resistance  
                                   ? <label>Water Resistance (e.g. 200 meters)</label>
                                   : null 
                              }
                              <input className='Input-element'  
                                   type='text'
                                   name='water_resistance'
                                   defaultValue={watch.water_resistance}
                                   placeholder='Water Resistance (e.g. 200 meters)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              {watch.date_bought  
                                   ? <label>Date Bought/Gifted (yyyy-mm-dd, yyyy-mm or yyyy)</label>
                                   : null 
                              }
                              <input className='Input-element' required 
                                   type='text'
                                   name='date_bought'
                                   defaultValue={watch.date_bought}
                                   placeholder='Date Bought/Gifted (yyyy-mm-dd, yyyy-mm or yyyy)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              {watch.cost  
                                   ? <label>Cost (e.g. 199.99 or 0)</label>
                                   : null 
                              }
                              <input className='Input-element' required  
                                   type='number'
                                   step='0.01'
                                   name='cost'
                                   defaultValue={parseFloat(watch.cost).toFixed(2)}
                                   placeholder='Cost (e.g. 199.99 or 0)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              {watch.notes  
                                   ? <label>Notes</label>
                                   : null 
                              }
                              <textarea className='Text-area'  
                                   name='notes'
                                   placeholder='Notes'
                                   defaultValue={watch.notes}
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