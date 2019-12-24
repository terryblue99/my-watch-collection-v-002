import React from 'react'
import { usePromiseTracker } from "react-promise-tracker"
import Loader from 'react-loader-spinner'

const ProcessingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker()
  return promiseInProgress &&
    <div>
      <Loader type="ThreeDots" color="#2BAD60" height="50" width="50" />
      Deleting your account - Please wait!
    </div>
}

export default ProcessingIndicator
