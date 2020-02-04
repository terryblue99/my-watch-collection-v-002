import React, { Component } from 'react'
import { connect } from 'react-redux'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'
import '../App.css'
import NavBar from './NavBar'
import { addWatchAction } from '../actions/watchesActions'
import ClearForm from "../components/ClearForm"
import SetFocus from "../components/SetFocus"
import RedirectTo from '../components/RedirectTo'
import DateValidation from "../components/DateValidation"

class AddWatch extends Component {

     state = {
          watchData: {
               watch_maker: '',
               watch_name: '',
               movement: '',
               band: '',
               model_number: '',
               case_measurement: '',
               water_resistance: '',
               complications: '',
               date_bought: '',
               cost: '',
               notes: '',
               user_id: this.props.currentUser.user.id
          },
          image: null,
          backToDashboard: false
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
          // validate the watch_name/cost/date_bought combination input
          if ((this.state.watchData.watch_name !== this.props.WatchRelated && 
               Number(this.state.watchData.cost) > 0 &&
               Number(this.state.watchData.date_bought) === 0) ||
              (this.state.watchData.watch_name !== this.props.WatchRelated && 
               Number(this.state.watchData.cost) === 0 &&
               Number(this.state.watchData.date_bought) === 0)) { 
                    alert('1 Date Bought/Gifted must be in the format yyyy-mm-dd, yyyy-mm or yyyy')
                    return
               }
          // validate the 'Date Bought/Gifted' input
          const validDate = DateValidation(this.state.watchData.date_bought.toString(), 'add')
          if (!validDate) {
               alert('2 Date Bought/Gifted must be in the format yyyy-mm-dd, yyyy-mm or yyyy')
               return
          }
          // Create the watch
          let watchRelated = false
          if (this.state.watchData.watch_name === this.props.WatchRelated) {
               watchRelated = true
          }    
          const formData = new FormData()
          formData.append('watch_maker', this.state.watchData.watch_maker)
          formData.append('watch_name', this.state.watchData.watch_name)
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
          this.props.addWatchAction(formData, this.state.watchData, watchRelated)
          // Clear the form
          ClearForm('AddWatch-Form')
          // Set focus on the first input
          SetFocus('Focus-first-input')
     }

     handleBack = () => {
          this.setState({
               backToDashboard: true
          })
     }

     render() {    

          if (this.state.backToDashboard) { 
               this.setState({
                    backToDashboard: false
               }) 
               return RedirectTo('/dashboard')
          }

          if (this.props.location.AddWatchRelated) {
               this.state.watchData.watch_name = this.props.WatchRelated
          }
      
          return (
               
               <div>
                    <NavBar /> 
                    <div className='WatchForm-container' css={css`
                        display: flex;
                        justify-content: space-between;
                        margin-top: 20px;

                        @media (max-width: 945px) {
                            flex-direction: column;
                        }
                    `}> 
                         <button onClick={this.handleBack} className='btn Back-button Button-text'>Back to dashboard</button>
                         <form id='AddWatch-Form' onSubmit={this.handleSubmit}>
                              <h1 className='WatchForm-header Dark-red-color'>
                                   {!this.props.location.AddWatchRelated
                                        ? <>Add a Watch</>
                                        : <>Add a Watch-Related</>
                                   }
                              </h1>
                              {!this.props.location.AddWatchRelated
                                   ?    <> <label>Watch Maker</label>
                                           <input autoFocus id='Focus-first-input' className='Input-element' required 
                                             type='text'
                                             name='watch_maker'
                                             onChange={this.handleChange}/>
                                        </>
                                   :    <> <label>Title</label>
                                           <input autoFocus id='Focus-first-input' className='Input-element' required 
                                             type='text'
                                             name='watch_maker'
                                             onChange={this.handleChange}/>
                                        </>
                              }
                              <br />
                              {!this.props.location.AddWatchRelated
                                   ?    <> <label>Watch Name</label>
                                           <input className='Input-element' required 
                                             type='text'
                                             name='watch_name'
                                             onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element Input-related'
                                             type='text'
                                             name='watch_name'
                                             value={this.props.WatchRelated}/>
                                        </>
                              }
                              <br />
                              {!this.props.location.AddWatchRelated
                                   ?    <> <label>Movement</label>
                                           <input className='Input-element'
                                             type='text'
                                             name='movement'
                                             onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element'
                                             type='text'
                                             name='movement'
                                             onChange={this.handleChange}/>
                                        </>
                              }
                              <br />
                              {!this.props.location.AddWatchRelated
                                   ?    <> <label>Complications</label>
                                           <input className='Input-element'
                                             type='text'
                                             name='complications'
                                             onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element'
                                             type='text'
                                             name='complications'
                                             onChange={this.handleChange}/>
                                        </>
                              }
                              <br />
                              {!this.props.location.AddWatchRelated
                                   ?    <> <label>Band</label>
                                           <input className='Input-element'
                                             type='text'
                                             name='band'
                                             onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element'
                                             type='text'
                                             name='band'
                                             onChange={this.handleChange}/>
                                        </>
                              }
                              <br /> 
                              {!this.props.location.AddWatchRelated
                                   ?    <> <label>Model Number</label>
                                           <input className='Input-element'
                                             type='text'
                                             name='model_number'
                                             onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element'
                                             type='text'
                                             name='model_number'
                                             onChange={this.handleChange}/>
                                        </>
                              }
                              <br />
                              {!this.props.location.AddWatchRelated
                                   ?    <> <label>Case Measurement (e.g. 45mm)</label>
                                           <input className='Input-element'
                                             type='text'
                                             name='case_measurement'
                                             onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element'
                                             type='text'
                                             name='case_measurement'
                                             onChange={this.handleChange}/>
                                        </>
                              }
                              <br />
                              {!this.props.location.AddWatchRelated
                                   ?    <> <label>Water Resistance (e.g. 200 meters)</label>
                                           <input className='Input-element'
                                             type='text'
                                             name='water_resistance'
                                             onChange={this.handleChange}/>
                                        </>
                                   :    <> <input className='Input-element'
                                             type='text'
                                             name='water_resistance'
                                             onChange={this.handleChange}/>
                                        </>
                              }
                              <br />
                              {!this.props.location.AddWatchRelated
                                   ?    <> <label>Date Bought/Gifted (yyyy-mm-dd, yyyy-mm or yyyy)</label>
                                           <input className='Input-element' required
                                             type='text'
                                             name='date_bought'
                                             onChange={this.handleChange}/>
                                        </>
                                   : null
                              }
                              <br />
                              {!this.props.location.AddWatchRelated
                                   ?    <> <label>Cost (e.g. 199.99 or 0)</label>
                                           <input className='Input-element' required
                                             type='number'
                                             step='0.01'
                                             min='0'
                                             name='cost'
                                             onChange={this.handleChange}/>
                                        </>
                                   : null
                              }
                              <br />
                              <textarea className='Text-area'  
                                   name='notes'
                                   placeholder='Notes'
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
       currentUser: state.currentUser,
       WatchRelated: state.myWatches.WatchRelated // For records that are not related to a specific watch.
     } 
 }

export default connect(mapStateToProps, { addWatchAction })(AddWatch)
