import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'
import NavBar from './NavBar'
import { editWatchAction } from '../actions/watchesActions'
import RedirectTo from '../components/RedirectTo'
import RedirectToWithState from "../components/RedirectToWithState"
import DateValidation from "../components/DateValidation"

class EditWatch extends Component {
     
     state = {
       watchData: {
          id: this.props.location.state.watch.id,
          watch_maker: this.props.location.state.watch.watch_maker,
          watch_name: this.props.location.state.watch.watch_name,
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
       isBackToDashboard: false,
       isFormInput: false
     }

     handleChange = (event) => {
        this.setState({
          watchData: {
               ...this.state.watchData,
               [event.target.name]: event.target.value
           },
           isFormInput: true
        })                         
     }

     handleFile = (event) => {
          this.setState({
               image: event.target.files[0],
               isFormInput: true
          }) 
     }

     handleSubmit = (event) => {
          event.preventDefault() 

          const {
               id,
               watch_maker,
               watch_name,
               movement,
               band,
               model_number,
               case_measurement,
               water_resistance,
               complications,
               date_bought,
               cost,
               notes,
               user_id 
          } = this.state.watchData

          let isWatchRelated = false
          if (watch_name === this.props.watchRelated) {
               isWatchRelated = true
          } 
          if (this.state.isFormInput) {
               // validate the 'Date Bought/RCVD' input for watch records
               if (watch_name && !isWatchRelated) {
                    const validDate = DateValidation(date_bought)
                    if (!validDate) {
                         alert('Date Bought/RCVD must be in the format yyyy-mm-dd, yyyy-mm or yyyy')
                         return
                    }
               }    
               // Edit the record
               const formData = new FormData()
               formData.append('watch_maker', watch_maker)
               formData.append('watch_name', watch_name)
               formData.append('movement', movement)
               formData.append('band', band)
               formData.append('model_number', model_number)
               formData.append('case_measurement', case_measurement)
               formData.append('water_resistance', water_resistance)
               formData.append('complications', complications)
               formData.append('date_bought', date_bought)
               formData.append('cost', cost)
               formData.append('notes', notes)
               formData.append('user_id', user_id)   
               if (this.state.image) {
                    formData.append('image', this.state.image)
               }
               this.props.editWatchAction(formData, id)
               if (!isWatchRelated) {
                    alert('The watch has been edited')
               } else alert('The watch-related has been edited')
          } else {
               alert('Nothing has been edited!')
          }  
     }

     handleBack = () => {
          this.setState({
               isBackToDashboard: true
          })
     }

     render() {
 
          if (this.state.isBackToDashboard && this.state.isFormInput) {
               this.setState({
                    isFormInput: false,
                    isBackToDashboard: false
               })  
               return RedirectToWithState(
                                             '/dashboard',
                                             {
                                                  isFromEditWatch: true,
                                                  isEdits: true
                                             }
                                         )
                    
          } 
          else if (this.state.isBackToDashboard) {
                    this.setState({
                         isBackToDashboard: false
                    }) 
                    return RedirectTo('/dashboard')
          }

          const watch = this.props.location.state.watch
          const watchRelated = this.props.watchRelated
      
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
                         
                         <form className='EditWatch-Form'
                               onSubmit={this.handleSubmit}
                         >
                              <h1 className='WatchForm-header Dark-red-color'>
                                   {!watch.watch_name.includes(watchRelated)
                                        ? <>Edit this Watch</>
                                        : <>Edit this Watch-Related</>
                                   }
                              </h1>
                              {watch.watch_maker && !watch.watch_name.includes(watchRelated)
                                   ?    <> <label>Watch Maker</label>
                                           <input className='Input-element' required 
                                                  type='text'
                                                  name='watch_maker'
                                                  defaultValue={watch.watch_maker}
                                                  onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element' required 
                                                  autoComplete='off'
                                                  type='text'
                                                  name='watch_maker'
                                                  defaultValue={watch.watch_maker}
                                                  onChange={this.handleChange}/>
                                        </>
                              }
                              <br />
                              {watch.watch_name && !watch.watch_name.includes(watchRelated)
                                   ?    <> <label>Watch Name</label>
                                           <input className='Input-element' required 
                                                  type='text'
                                                  name='watch_name'
                                                  defaultValue={watch.watch_name}
                                                  onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element Input-related'
                                                  type='text'
                                                  name='watch_name'
                                                  value={watchRelated}/>
                                        </>
                              }
                              <br />
                              {!watch.watch_name.includes(watchRelated)
                                   ?    <> <label>Movement</label>
                                           <input className='Input-element'
                                                  type='text'
                                                  name='movement'
                                                  defaultValue={watch.movement}
                                                  onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element'
                                                  autoComplete='off'
                                                  type='text'
                                                  name='movement'
                                                  defaultValue={watch.movement}
                                                  onChange={this.handleChange}/>
                                        </>
                              }
                              <br />
                              {!watch.watch_name.includes(watchRelated)
                                   ?    <> <label>Complications</label>
                                           <input className='Input-element'
                                                  type='text'
                                                  name='complications'
                                                  defaultValue={watch.complications}
                                                  onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element'
                                                  autoComplete='off'
                                                  type='text'
                                                  name='complications'
                                                  defaultValue={watch.complications}
                                                  onChange={this.handleChange}/>
                                        </>
                              }
                              <br /> 
                              {!watch.watch_name.includes(watchRelated)
                                   ?    <> <label>Band</label>
                                           <input className='Input-element'
                                                  type='text'
                                                  name='band'
                                                  defaultValue={watch.band}
                                                  onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element'
                                                  autoComplete='off'
                                                  type='text'
                                                  name='band'
                                                  defaultValue={watch.band}
                                                  onChange={this.handleChange}/>
                                        </>
                              }
                              <br />
                              {!watch.watch_name.includes(watchRelated)
                                   ?    <> <label>Model Number</label>
                                           <input className='Input-element'
                                                  type='text'
                                                  name='model_number'
                                                  defaultValue={watch.model_number}
                                                  onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element'
                                                  autoComplete='off'
                                                  type='text'
                                                  name='model_number'
                                                  defaultValue={watch.model_number}
                                                  onChange={this.handleChange}/>
                                        </>
                              }
                              <br /> 
                              {!watch.watch_name.includes(watchRelated)
                                   ?    <> <label>Case Measurement (e.g. 45mm)</label>
                                           <input className='Input-element'
                                                  type='text'
                                                  name='case_measurement'
                                                  defaultValue={watch.case_measurement}
                                                  onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element'
                                                  autoComplete='off'
                                                  type='text'
                                                  name='case_measurement'
                                                  defaultValue={watch.case_measurement}
                                                  onChange={this.handleChange}/>
                                        </>
                              }
                              <br />
                              {!watch.watch_name.includes(watchRelated)
                                   ?    <> <label>Water Resistance (e.g. 200 meters)</label>
                                           <input className='Input-element'
                                                  type='text'
                                                  name='water_resistance'
                                                  defaultValue={watch.water_resistance}
                                                  onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element'
                                                  autoComplete='off'
                                                  type='text'
                                                  name='water_resistance'
                                                  defaultValue={watch.water_resistance}
                                                  onChange={this.handleChange}/>
                                        </>
                              }
                              <br />
                              {!watch.watch_name.includes(watchRelated)
                                   ?    <> <label>Date Bought/RCVD (yyyy-mm-dd, yyyy-mm or yyyy)</label>
                                           <input className='Input-element' required
                                                  type='text'
                                                  name='date_bought'
                                                  defaultValue={watch.date_bought}
                                                  onChange={this.handleChange}/>
                                        </>
                                   : null
                              }
                              <br />
                              {!watch.watch_name.includes(watchRelated)
                                   ?    <> <label>Cost (e.g. 199.99 | defaults to 0)</label>
                                           <input className='Input-element'
                                                  type='number'
                                                  step='0.01'
                                                  min='0'
                                                  name='cost'
                                                  defaultValue={watch.cost}
                                                  onChange={this.handleChange}/>
                                        </>
                                   : null
                              }
                              <br />
                              <textarea className='Text-area'  
                                        name='notes'
                                        placeholder='Notes'
                                        defaultValue={watch.notes}
                                        onChange={this.handleChange}
                              />
                              <b className='WatchForm-upload-text'>
                                   Upload image</b>
                              <input className='Input-element Choose-image'  
                                     type='file'
                                     name='image'
                                     onChange={this.handleFile}
                              />
                              <button className='btn Save-button Button-text' type='submit'>Save</button>
                         </form> 
                    </div>
               </div>
          )
     } 
}

const mapStateToProps = (state) => {
     return {
       watchRelated: state.myWatches.watchRelated  // For records that are not related to a specific watch.
     } 
}

export default connect(mapStateToProps, { editWatchAction })(EditWatch)

