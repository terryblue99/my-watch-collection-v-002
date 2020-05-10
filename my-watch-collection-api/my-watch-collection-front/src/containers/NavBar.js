import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { searchWatchesAction } from '../actions/watchesActions'
import ClearForm from "../components/ClearForm"
import RedirectToWithState from "../components/RedirectToWithState"

class NavBar extends Component {

  state = {
    isSearchRequested: false,
    searchText: ''
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  handleSearch = (event) => {
    event.preventDefault()
    this.props.searchWatchesAction(this.state.searchText)
    this.setState({
      isSearchRequested: true
    })
  }
  
  render() {
    
    if (this.state.isSearchRequested &&
        this.props.watches.length > 0) {
        this.setState({
          isSearchRequested: false,
          searchText: ''
        })  
        // Clear the form
        ClearForm('Nav-search-form')
        // Display list from the search on the dashboard
        return  RedirectToWithState(
                                      '/dashboard',
                                      {
                                        isFromNavBar: true,    
                                        isSearchSuccessful: true
                                      } 
                                    )
        
    } else if (this.state.isSearchRequested &&
                this.props.watches.length === 0) 
                {
                  this.setState({
                    isSearchRequested: false,
                    searchText: ''
                  }) 
                  // Clear the form
                  ClearForm('Nav-search-form')

                  alert('Search not found. Please correct and try again!')
                  // Display original list on the dashboard
                  return  RedirectToWithState (
                                                '/dashboard',
                                                {
                                                  isFromNavBar: true,    
                                                  isSearchFailed: true
                                                } 
                                              )
                }

    return (

      <div className='Nav-header'>

        <div className='Nav-container'>   

          <NavLink className='Nav-logo-link' to='/dashboard'>
            My Watch Collection
          </NavLink>
        
          <nav className='Nav'>

            <div className='Nav-item Nav-logged_in-logout-profile'> 
              {this.props.user.logged_in} {
                <>
                  <div  className='Nav-item Nav-logged_in-as'>
                    Logged in as: {this.props.user.user.email}
                  </div>
                  <NavLink  className='Nav-log_out-link' to='/logout'> 
                    Log Out   
                  </NavLink>
                  <NavLink  className='Nav-edit-profile-link' to='/edit_profile'> 
                    Edit Profile   
                  </NavLink>
                </>
              }
            </div>
          </nav>

          <form id='Nav-search-form'
            onSubmit={this.handleSearch}
          >
            <input className='Nav-search-input Center-text'
              type='text'
              name='watch_search'
              placeholder='Search My Watch Collection'
              onChange={this.handleChange}
            /> 
            <button className='Nav-item Search-button Button-text' type='submit'><b>Search</b></button>         
          </form>

        </div>
        
      </div>   
  
    )  
  }
}

const mapStateToProps = (state) => { 
  return {
    user: state.currentUser,
    watches: state.myWatches.watches
  } 
}

export default connect(mapStateToProps, { searchWatchesAction })(NavBar)