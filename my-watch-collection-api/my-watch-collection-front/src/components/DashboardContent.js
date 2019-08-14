// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'
import logo from '../logo.jpg'

const DashboardContent = (props) => {
  return (
    <div css={css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}>
      <img src={logo} alt='logo' align='middle' className='logo'/>
    </div>
  )
}


export default DashboardContent