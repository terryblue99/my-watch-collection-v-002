// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const Detail = ({ showWatches, currentWatch }) => {  

    if (currentWatch.watch_maker) {

        return (

            <div className="Detail" css={css`
                    display: ${showWatches ? 'none' : 'block'};
                    grid-area: main;   
            `}>
                <div> 
                    <b><h1 css={css`
                        text-align: center;
                        paddingTop: 40px;
                        
                    `}>{currentWatch.watch_maker} {currentWatch.watch_name}</h1></b>
                </div>
                <div css={css`
                    text-align: center;
                `}>
                    <br /><p><b css={detailCss}>Movement</b></p>
                    <h3>{currentWatch.movement}</h3>
                    <br /><p><b css={detailCss}>Band</b></p> 
                    <h3>{currentWatch.band}</h3>
                    <br /><p><b css={detailCss}>Model number</b></p>
                    <h3>{currentWatch.model_number}</h3>
                    <br /><p><b css={detailCss}>Case measurement</b></p>
                    <h3>{currentWatch.case_measurement}</h3>
                    <br /><p><b css={detailCss}>Water resistance</b></p>
                    <h3>{currentWatch.water_resistance}</h3>
                    <br /><p><b css={detailCss}>Complications</b></p>
                    <h3>{currentWatch.complications}</h3>
                    <br /><p><b css={detailCss}>Date bought</b></p>
                    <h3>{currentWatch.date_bought}</h3>
                    <br /><p><b css={detailCss}>Cost</b></p>
                    <h3>{currentWatch.cost}</h3>
                </div>
            </div>
        )     

    } else return null
}

const detailCss = {fontSize: '20px', color: 'green'}

export default Detail
