import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { searchWatchesAction } from '../actions/watchesActions'
import ClearForm from '../components/ClearForm'
import RedirectToWithState from '../components/RedirectToWithState'

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

          <div className='Nav-logo Gold-color' to='/dashboard'>
            My Watch Collection
          </div>
        
          <nav className='Nav'>

            <div className='Nav-links'> 
              {this.props.user.logged_in} {
                <>
                  <div  className='Nav-logged_in-as'>
                    Logged in as: {this.props.user.user.email}
                  </div>
                  <NavLink  className='Nav-log_out-link Cornsilk-color' to='/logout'> 
                    Log Out   
                  </NavLink>
                  <NavLink  className='Nav-link Nav-edit-profile-link Cornsilk-color' to='/edit_profile'
                            onClick={() => {this.className=' active'}}>
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
              onInput={this.handleChange}
            /> 
            <button className='Search-button Button-text' type='submit'><b>Search</b></button> 
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