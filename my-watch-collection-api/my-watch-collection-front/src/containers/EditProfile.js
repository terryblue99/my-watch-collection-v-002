import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import NavBar from './NavBar'
import { editProfileAction } from '../actions/currentUserActions'
import { deleteUserAction } from '../actions/currentUserActions'
import { trackPromise } from 'react-promise-tracker' // tracks deleteUserAction, displaying processing spinner
                                                     // https://lemoncode.github.io/react-promise-tracker/
import ProcessingIndicator from '../components/ProcessingIndicator' // https://www.basefactor.com/react-how-to-display-a-loading-indicator-on-fetch-calls
import RedirectTo from '../components/RedirectTo'

class EditProfile extends Component {
     
     state = {
    
          id: this.props.currentUser.user.id,  
          email: this.props.currentUser.user.email,
          password: '',
          password_confirmation: '',

          backToDashboard: false,
          formHasInput: false,
          processing: false
     }

     handleDelete = () => {
          if (window.confirm('Do you really want to delete your account?\nAll of your watches will also be deleted!')) {
               this.setState({
                    processing: true
               })
               trackPromise (
                    this.props.deleteUserAction(this.props.currentUser.user.id)  
               )                     
          }
      }

     handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
          formHasInput: true
        })                         
     }

     handleSubmit = (event) => {
        event.preventDefault() 
          
          if (this.state.formHasInput) {

               if (this.state.password && this.state.password.length < 8 ) {
                    alert('Password must be a minimum of 8 characters!')
                    return
               }

               if (this.state.password && this.state.password !== this.state.password_confirmation) {
                    alert('New Password and New Password Confirmation must be the same!')
                    return
               }

               if (window.confirm('Do you really want to update your account?')) {
                    // Edit the profile
                    const formData = new FormData()
                    formData.append('email', this.state.email)
                    formData.append('password', this.state.password)
                    formData.append('password_confirmation', this.state.password_confirmation)
                    this.props.editProfileAction(formData, this.props.currentUser.user.id)
               }    
          }  else {
               alert('Nothing has been edited!')
          }  
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

          const user = this.props.currentUser.user
      
          return (  
              
               <div>
                    <NavBar />
                    <div className='Profile-container'>
                         <button onClick={this.handleBack} className='btn Back-button Button-text'>Back to dashboard</button>   
                         <form id='EditProfile-Form' onSubmit={this.handleSubmit}>
                              <h1 className='ProfileForm-header'>
                                   Edit Profile
                              </h1>
                              <h2 className='ProfileForm-subheader'>
                                   (You can change your email and/or your password here)
                              </h2>
                              <div className='Profile'>
                                   <label>Email</label>
                                   <input className='Input-element'
                                             type='email'
                                             name='email'
                                             defaultValue={user.email}
                                             onChange={this.handleChange}
                                   />
                                   <br /> 
                                   <label>New Password (<span className='ProfileForm-NewPassword-text'>blank if you don't want to change it</span>)</label>
                                   <input className='Input-element' 
                                             type='password'
                                             name='password'
                                             placeholder='New password'
                                             onChange={this.handleChange}
                                   />
                                   <br />
                                   <label>New Password Confirmation</label>
                                   <input className='Input-element' 
                                             type='password'
                                             name='password_confirmation'
                                             placeholder='Confirm your new password'
                                             onChange={this.handleChange}
                                   />
                                   <br />
                                   <button className='btn ProfileUpdate-button Button-text' type='submit'>Update Profile</button>
                                   <br />
                                   <br />
                              </div>
                         </form>
                         <hr className='ProfileDelete' />
                         <div className='ProfileDelete'> 
                              {this.state.processing ? <ProcessingIndicator /> :
                                   <button className='btn ProfileDelete-button Button-text' onClick={this.handleDelete}> 
                                        Delete My Account
                                   </button>}
                         </div>
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

export default connect(mapStateToProps, { editProfileAction, deleteUserAction })(EditProfile)
