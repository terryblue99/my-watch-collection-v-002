// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const List = ({ watches,  showWatches }) => {  

    return (

        <div css={css`
                grid-area: sidebar-desktop;
                border-right: 1px solid black;
                height: 100%;
                text-align: left;

                @media (max-width: 800px) {
                    display: ${showWatches ? 'block' : 'none'}
                }

                display: grid;
                grid-template-rows: auto 95px;
            `}>
            <ul className='List' css={css`
                list-style-type: none;
            `}>
                {watches}
            </ul>
            <div css={css`
                text-align: center;
                border-top: 1px solid;
                padding-top 10px;
            `}>
                <button css={css`
                    text-align: center;
                    font-size: 1.5rem;
                    padding-left: 30px;
                    padding-right: 30px;
                `}
                    onClick={() => {
                    alert('add new watch')
                }}>Add a watch</button>
            </div>
        </div>
    )  
}

export default List