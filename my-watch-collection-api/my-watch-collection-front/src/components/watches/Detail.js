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
                    <br /><p><b css={detailCss}>Movement:</b> {currentWatch.movement}</p>
                    <br /><p><b css={detailCss}>Band:</b> {currentWatch.band}</p>
                    <br /><p><b css={detailCss}>Model number:</b> {currentWatch.model_number}</p>
                    <br /><p><b css={detailCss}>Case measurement:</b> {currentWatch.case_measurement}</p>
                    <br /><p><b css={detailCss}>Water resistance:</b> {currentWatch.water_resistance}</p>
                    <br /><p><b css={detailCss}>Date bought:</b> {currentWatch.date_bought}</p>
                    <br /><p><b css={detailCss}>Cost:</b> {currentWatch.cost}</p>
                    <br /><b><h2 css={css`
                        text-align: center;
                        paddingTop: 40px;    
                    `}>Complications</h2></b>
                </div>
            </div>
        )     

    } else return null
}

const detailCss = {fontSize: '20px', color: 'green'}

export default Detail
