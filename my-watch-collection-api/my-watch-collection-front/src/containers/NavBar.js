import { Component } from 'react' 
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion
import logoText from '../images/my-watch-collection-text.png'
import { searchWatchesAction } from '../actions/watchesActions'
import ClearForm from "../components/ClearForm"
import RedirectTo from '../components/RedirectTo'
import RedirectToWithState from "./RedirectToWithState"

class NavBar extends Component {

  state = {
    searchRequested: false,
    searchText: ''
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.searchWatchesAction(this.state.searchText)
    this.setState({
      searchRequested: true
    })
  }
  
  render() {
    
    if (this.state.searchRequested &&
        this.props.watches.length > 0) {
        this.setState({
          searchRequested: false,
          searchText: ''
        })  
        // Clear the form
        ClearForm('Navbar-Search-Form')
        // Display watch/es from the search on the dashboard
        return  RedirectTo('/dashboard')
        
    } else if (this.state.searchRequested &&
                this.props.watches.length === 0) {
                  this.setState({
                    searchRequested: false,
                    searchText: ''
                  }) 
                  // Clear the form
                  ClearForm('Navbar-Search-Form')

                  alert('Search not found. Please correct and try again!')
                  // Display original watch list on the dashboard
                  return  RedirectToWithState(
                                                  '/dashboard',
                                                  {
                                                      from_NavBar: true,    
                                                      searchFailed: true
                                                  } 
                                              )
                }

    return (
      <div className='Navbar'>

        <Navbar css={css`
          background-color: #454140;
          margin: 0 auto;
        `}>
          <Navbar.Brand> 
            <img src={logoText} alt='logo text' className='LogoText'/>
          </Navbar.Brand>

          <div css={css`
              color: cornsilk;
              display: inline-block;
              font-size: 1rem;
              padding-left: 120px;
              margin: 0px 10px 0px;
               
              @media (min-width: 1500px) {
                font-size: 1.25rem;
              }
              
              @media (max-width: 1056px) {
                padding-top: 15px;
                padding-left: 40px;
              }
            `}>Logged in as:
            <p css={css`
              color: khaki;
              display: inline-block;
              font-size: 1rem;
              margin: 5px 10px 0px;
               
              @media (min-width: 1500px) {
                font-size: 1.25rem;
              }
              
              @media (max-width: 1056px) {
                padding-bottom: 15px;
                padding-left: 10px;
              }
            `}>{this.props.user.user.email}
            </p>
          </div> 
          <div css={css`   
            display: inline-block;
          `}>
            {this.props.user.logged_in} {
              <div>
                <NavLink  to='/logout' css={css`
                  color: cornsilk;
                  padding-left: 15px;
                  text-decoration: none;
                  font-size: 1rem;
                    
                  &:hover {
                    color: goldenrod;
                    cursor: pointer;
                  }

                  @media (min-width: 1500px) {
                    font-size: 1.25rem;
                  }
                `}> 
                  Log Out   
                </NavLink>
                <NavLink  to='/edit_profile' css={css`
                  color: cornsilk;
                  padding-left: 15px;
                  text-decoration: none;
                  font-size: 1rem;
                    
                  &:hover {
                    color: goldenrod;
                    cursor: pointer;
                  }

                  @media (min-width: 1500px) {
                    font-size: 1.25rem;
                  }
                `}> 
                  Edit Profile   
                </NavLink>
              </div>  
            }
          </div>
          <div css={css`
              display: inline-block;
              padding-left: 40px;
              margin-bottom: 3px;
            `}>
            <form id='Navbar-Search-Form' onSubmit={this.handleSubmit}>
              <input required
                type='text'
                name='watch_search'
                placeholder='Search My Watch Collection'
                onChange={this.handleChange}
                css={css`
                  border-radius: 8px;
                  font: inherit;
                  margin-right: 10px;
                  margin-bottom: 5px;
                  min-width: 350px;
                  padding: 4px 8px;
                   
                  @media (min-width: 1500px) {
                    font-size: 1rem;
                    min-width: 500px;
                  }
                   
                  @media (max-width: 750px) {
                    font-size: .75rem;
                    min-width: 300px;
                  }
                `}
              />
              <button className='btn Search-button Button-text' type='submit'><b>Search</b></button>          
            </form>
          </div> 
        </Navbar>
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