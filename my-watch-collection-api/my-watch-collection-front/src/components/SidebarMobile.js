// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const SidebarMobile = ({ showWatches, setShowWatches }) => {  

    return (
        <ul css={ulStyle}>
            <div css={buttonStyle} onClick={() => {
                setShowWatches(!showWatches) // watch list can be toggled on and off in mobile view
            }}>
                <span></span>     
                <span></span>     
                <span></span>     
            </div>
        </ul>
    )  
}

const ulStyle = css`

    border-right: 1px solid black;
    grid-area: sidebar-mobile;
    height: 100%;
    list-style-type: none;
    text-align: left;

    @media (min-width: 750px) {
        display: none;
    }
`

const buttonStyle = css`
    display: block;
    padding-left: 20px;
    padding-top: 20px;
    
    span {
        background: gray;
        border-radius: 3px;
        display: block;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        width: 33px;
        z-index: 1;
    }
`

export default SidebarMobile
