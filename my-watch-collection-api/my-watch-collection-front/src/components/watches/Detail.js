// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const Detail = ({ showWatches, currentWatch }) => {  

    return (
        
        <div className="Detail" css={css`
            display: ${showWatches ? 'none' : 'block'};
            grid-area: main;   
        `}> 
            <b><h1 css={css`
                text-align: center;
                paddingTop: 40px;
                paddingBottom: 40px;
            `}>{currentWatch.watch_maker} {currentWatch.watch_name}</h1></b>
        </div>
    ) 
}

export default Detail
