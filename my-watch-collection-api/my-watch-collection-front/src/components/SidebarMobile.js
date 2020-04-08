// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const SidebarMobile = ({ showWatches, setShowWatches }) => {  

    return (
        <div css={ListStyle}>
            <div className='List-icon' onClick={() => {
                setShowWatches(!showWatches) // watch list can be toggled on and off in mobile view
            }}>
                <div></div>     
            </div>
        </div>
    )  
}

const ListStyle = css`

    grid-area: sidebar-mobile;
    height: 100%;
    list-style-type: none;
    text-align: left;

    @media (min-width: 750px) {
        display: none;
    }
`

export default SidebarMobile
