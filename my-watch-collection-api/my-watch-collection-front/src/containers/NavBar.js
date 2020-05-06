import React, { Component } from 'react' 
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import LogoLink from '../images/my-watch-collection-link.png'
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
        ClearForm('Navbar-search-form')
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
                  ClearForm('Navbar-search-form')

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

      <Navbar className='Navbar'>
        
        <Navbar.Brand> 
          <NavLink to='/dashboard'>
            <img src={LogoLink} alt='logo link' 
                 className='Logo-link'
            />
          </NavLink>
        </Navbar.Brand>

        <div className='Navbar-Logged-in-as'>
            Logged in as:
          <p className='Navbar-user'>
            {this.props.user.user.email}
          </p>
        </div> 

        <div className='Navbar-logout-profile-links'>
          {this.props.user.logged_in} {
            <div>
              <NavLink  className='Navbar-logout-link' to='/logout'> 
                Log Out   
              </NavLink>
              <NavLink  className='Navbar-edit-profile-link' to='/edit_profile'> 
                Edit Profile   
              </NavLink>
            </div>  
          }
        </div>

        <div className='Navbar-search'>
          <form id='Navbar-search-form'
            onSubmit={this.handleSearch}
          >
            <input className='Navbar-search-input Center-text' 
              required
              type='text'
              name='watch_search'
              placeholder='Search My Watch Collection'
              onChange={this.handleChange}
            />
            <button className='btn Search-button Button-text' type='submit'><b>Search</b></button>          
          </form>

        </div> 

      </Navbar>
  
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