// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const List = ({ watches,  showWatches }) => {  

    return (

        <ul className='List' css={css`
            grid-area: sidebar-desktop;
            border-right: 1px solid black;
            height: 100%;
            text-align: left;
            list-style-type: none;

            @media (max-width: 800px) {
                display: ${showWatches ? 'block' : 'none'}
            }
        `}>
            {watches}
        </ul>
    )  
}

export default List