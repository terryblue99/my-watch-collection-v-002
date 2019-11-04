import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './App.css'
import { editProfileAction } from '../actions/currentUser'
import NavBar from '../components/NavBar'

class EditProfile extends Component {
     
     state = {
    
          id: this.props.currentUser.user.id,  
          email: '',
          password: '',
          password_confirmation: '',

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
          [event.target.name]: event.target.value,
          formHasInput: true
        })                         
     }

     handleSubmit = (event) => {
        event.preventDefault() 
        
          if (this.state.formHasInput) {

               if ((this.state.password && this.state.password.length < 8 ) ||
                   (this.state.password_confirmation && this.state.password_confirmation.length < 8 )) {
                    alert('Password must be a minimum of 8 characters!')
                    return
               } 
               if (this.state.new_password && this.state.new_password !== this.state.new_password_confirmation) {
                    alert('New Password and New Password Confirmation must be the same!')
                    return
               }
               // Edit the profile
               const formData = new FormData()
               formData.append('email', this.state.email)
               formData.append('password', this.state.password)
               formData.append('password_confirmation', this.state.password_confirmation)
               this.props.editProfileAction(formData, this.props.currentUser.user.id)    
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
                    formHasInput: false
               })  
               return <Redirect to={{
                    pathname: '/dashboard',
                    state: {
                         from_EditProfile: true,
                         Edits: true
                    }
               }}/>
          } else if (this.state.backToDashboard) {
                         return <Redirect to={{
                         pathname: '/dashboard'
                    }}/>
          }

          const user = this.props.currentUser.user
      
          return (  
               
               <div>
                    <NavBar />
                    <div className='Profile-container'>
                         <button onClick={this.handleBack} className='btn Back-button Button-text'>Back to dashboard</button>   
                         <form id='EditProfile-form' onSubmit={this.handleSubmit}>
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
                                   <label>New Password (<span className='Profile-NewPassword-text'>blank if you don't want to change it</span>)</label>
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
   
                                   <button className='btn Profile-button Button-text' type='submit'>Update Profile</button>
                              </div>
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

export default connect(mapStateToProps, { editProfileAction })(EditProfile)
