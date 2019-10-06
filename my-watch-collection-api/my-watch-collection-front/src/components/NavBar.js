import { Component } from 'react' 
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion
import logoText from '../images/my-watch-collection-text.png'
import { searchWatchesAction } from '../actions/watchesActions'

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
      searchRequested: true,
      searchText: event.target.value
    })
    // Clear the form
    document.getElementById('Navbar-search-form').reset()
  }
  
  render() {
    
    if (this.state.searchRequested) {
      this.setState({
        searchRequested: false
      })  
      // Display watch/es from the search on the dashboard
      return  <Redirect to={{
              pathname: '/dashboard',
              state: {
                from_NavBar: true,
                searchRequested: true
              }
      }}  />
    } 

    return (
      <div className='Navbar'>

        <Navbar css={css`
          background-color: #454140;
          margin: 0 auto;
          padding-top: 5px;
        `}>
          <Navbar.Brand> 
            <img src={logoText} alt='logo text' className='LogoText'/>
          </Navbar.Brand>

          <div css={css`
              color: cornsilk;
              display: inline-block;
              font-size: 1rem;
              padding-left: 140px;
              margin-bottom: 3px;

              @media (min-width: 1500px) {
                font-size: 1.25rem
              }
              
              @media (max-width: 750px) {
                padding-top: 15px;
              }
            `}>Logged in as:
            <p css={css`
              color: khaki;
              display: inline-block;
              font-size: 1rem;
              padding-left: 5px;

              @media (min-width: 1500px) {
                font-size: 1.25rem
              }
              
              @media (max-width: 750px) {
                padding-top: 15px;
              }
            `}>{this.props.user.user.email}
            </p>
          </div> 
          <div css={css`
              display: inline-block;
              padding-left: 40px;
              margin-bottom: 3px;
            `}>
            <form id='Navbar-search-form' onSubmit={this.handleSubmit}>
              <input required
                type='text'
                name='watch_search'
                placeholder='Search for a watch name or character string...'
                onChange={this.handleChange}
                css={css`
                  border-radius: 8px;
                  font: inherit;
                  margin-bottom: 5px;
                  margin-right: 10px;
                  min-width: 350px;
                  padding: 4px 8px;

                  @media (min-width: 1500px) {
                    font-size: 1rem;
                    min-width: 500px;
                  }

                  @media (max-width: 750px) {
                    padding: 1px 2px;
                    margin-top: 15px;
                  }
                `}
              />
              <button className='btn Search-button Button-text' type='submit'><b>Search</b></button>          
            </form>
          </div>
          <div>
            {this.props.user.logged_in} {
              <NavLink  to='/logout'
                        css={css`
                        color: cornsilk;
                        text-decoration: none;
                        font-size: 1rem;
                        position: absolute;
                        right: 10px;
                        top: 8px;

                        &:hover {
                          color: goldenrod;
                          cursor: pointer;
                        }

                        @media (min-width: 1500px) {
                          font-size: 1.25rem
                        }
                `}> Log Out   
              </NavLink>
            }
          </div> 
        </Navbar>
      </div>
    )  
  }
}

const mapStateToProps = (state) => { 
  return {
    user: state.currentUser,
    searchResult: state.myWatches.searchResult
  } 
}

export default connect(mapStateToProps, { searchWatchesAction })(NavBar)
