import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'
import '../App.css'
import NavBar from './NavBar'
import { addWatchAction } from '../actions/watchesActions'
import ClearForm from "../components/ClearForm"
import SetFocus from "../components/SetFocus"

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
          // validate the 'Date Bought/Gifted' input
          const date = this.state.watchData.date_bought
          if ((!date.match(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/gm)) &&
                   (!date.match(/^(19|20)\d{2}$/gm))) {
                    alert('Date Bought/Gifted must be in the format yyyy-mm-dd or yyyy')
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
          formData.append('notes', this.state.watchData.notes)
          formData.append('user_id', this.state.watchData.user_id)
          if (this.state.image) {
               formData.append('image', this.state.image)
          }
          this.props.addWatchAction(formData, this.state.watchData)
          // Clear the form
          ClearForm('AddWatch-Form')
          // Set focus on the watch name
          SetFocus('Focus-AddWatch-Name')
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
               return <Redirect to={{
                         pathname: '/dashboard'
                    }}/>
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
                              <h1 className='WatchForm-header'>
                                   Add a watch
                              </h1>
                              <input autoFocus id='Focus-AddWatch-Name' className='Input-element' required 
                                   type='text'
                                   name='watch_name'
                                   placeholder='Watch Name (Required)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element' required 
                                   type='text'
                                   name='watch_maker'
                                   placeholder='Watch Maker (Required)'
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
                                   placeholder='Model Number'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element'  
                                   type='text'
                                   name='case_measurement'
                                   placeholder='Case Measurement (e.g. 45mm)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element' 
                                   type='text'
                                   name='water_resistance'
                                   placeholder='Water Resistance (e.g. 200 meters)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element' required 
                                   type='text'
                                   name='date_bought'
                                   placeholder='Date Bought/Gifted (yyyy-mm-dd or yyyy) (Required)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <input className='Input-element' required
                                   type='number'
                                   step='0.01'
                                   name='cost'
                                   placeholder='Cost (e.g. 199.99 or 0) (Required)'
                                   onChange={this.handleChange}
                              />
                              <br /> 
                              <textarea className='Text-area'  
                                   name='notes'
                                   placeholder='Notes'
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
