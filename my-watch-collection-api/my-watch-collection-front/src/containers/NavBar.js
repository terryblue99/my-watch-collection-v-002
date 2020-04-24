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
        ClearForm('Navbar-Search-Form')
        // Display list from the search on the dashboard
        return  RedirectToWithState(
                                      '/dashboard',
                                      {
                                          isFromNavBar: true,    
                                          isSearchSuccessful: true
                                      } 
                                    )
        
    } else if (this.state.isSearchRequested &&
                this.props.watches.length === 0) {
                  this.setState({
                    isSearchRequested: false,
                    searchText: ''
                  }) 
                  // Clear the form
                  ClearForm('Navbar-Search-Form')

                  alert('Search not found. Please correct and try again!')
                  // Display original list on the dashboard
                  return  RedirectToWithState(
                                                '/dashboard',
                                                {
                                                    isFromNavBar: true,    
                                                    isSearchFailed: true
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
            color: khaki;
            display: inline-block;
            font-size: 1rem;
            margin: 0px 10px 0px;
            padding-left: 140px;
 
            @media (min-width: 1500px) {
              font-size: 1.25rem;
              padding-left: 190px;
            }

            @media (max-width: 1126px) {
              padding-bottom: 10px;
            }

            @media (max-width: 745px) {
              padding-left: 140px;
            }

            @media (max-width: 692px) {
              padding-left: 79px;
            }

            @media (max-width: 529px) {
              padding-left: 130px;
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
              
              @media (max-width: 1118px) {
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
                  font-size: 1rem;
                  padding-left: 15px;
                  text-decoration: none;
                    
                  &:hover {
                    color: goldenrod;
                    cursor: pointer;
                  }

                  @media (min-width: 1500px) {
                    font-size: 1.25rem;
                  }

                  @media (min-width: 703px) and (max-width: 762px) {
                    padding-left: 10px;
                  }

                  @media (max-width: 745px) {
                    padding-left: 320px;
                  }

                  @media (max-width: 692px) {
                    padding-left: 259px;
                  }

                  @media (max-width: 529px) {
                    padding-left: 140px;
                  }
                `}> 
                  Log Out   
                </NavLink>
                <NavLink  to='/edit_profile' css={css`
                  color: cornsilk;
                  font-size: 1rem;
                  padding-left: 15px;
                  text-decoration: none;
                    
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
            margin-bottom: 5px;
            padding-left: 15px;

            @media (min-width: 1139px) {
              margin-top: 5px;
              margin-left: 10px;
              position: absolute;
              right: 15px;
            }

            @media min-width(774) and (max-width: 985px) {
              margin-top: 10px;
            }
          `}>
            <form id='Navbar-Search-Form'
                  onSubmit={this.handleSearch}
            >
              <input  required
                      type='text'
                      name='watch_search'
                      placeholder='Search My Watch Collection'
                      onChange={this.handleChange}
                      css={css`
                  border-radius: 8px;
                  font-size: 1rem;
                  font: inherit;
                  margin-bottom: 5px;
                  margin-left: auto;
                  margin-right: 10px;
                  min-width: 300px;
                  padding: .25em 2em;
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