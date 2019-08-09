import { Link } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'

const List = ({ watches, showWatches, user_id, logged_in, listurl } ) => {  
    if (logged_in) {
        return (
            
            <div className='List' css={css`
                    border-right: 1px solid black;
                    grid-area: sidebar-desktop;
                    height: 100%;
                    text-align: left;
                    
                    @media (max-width: 800px) {
                        display: ${showWatches ? 'block' : 'none'}
                    }

                    display: grid;
                    grid-template-rows: auto 95px;
                `}>
                <ul css={css`
                    list-style-type: none;
                `}>
                    {watches}
                </ul>
                <div css={css`
                    border-top: 1px solid;
                    padding-top 10px;
                    text-align: center;
                `}> 
                <Link to={{
                            // Link to the new watch screen and pass the user id
                            pathname: '/watches/new',
                            state: {
                                fromList: true,
                                user_id: user_id,
                                logged_in: logged_in,
                                listurl: listurl
                            }
                        }}>
                        <button>Add a watch</button>
                </Link> 
                </div>
            </div>  
        ) 
    } else return null
}

export default List
