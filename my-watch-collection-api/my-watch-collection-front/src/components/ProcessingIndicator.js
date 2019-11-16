import React from 'react'
import { usePromiseTracker } from "react-promise-tracker"
import Loader from 'react-loader-spinner'

const ProcessingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker()
  return promiseInProgress &&
    <div className='Processing'>
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
}

export default ProcessingIndicator
