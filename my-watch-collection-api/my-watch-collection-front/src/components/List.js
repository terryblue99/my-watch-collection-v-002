// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const handleClick = (e) => {
    alert('add watch')
}

const List = ({ watches,  showWatches }) => {  
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
                <button onClick={handleClick}>Add a watch</button>
            </div>
        </div>
        
    ) 
}

export default List