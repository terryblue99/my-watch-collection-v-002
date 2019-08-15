// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'
import logo from '../logo.jpg'

const DashboardContent = () => {
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}>
      <img src={logo} alt='logo' align='middle' className='logo'/>
      <h2>Select a watch!</h2>
    </div>
  )
}


export default DashboardContent