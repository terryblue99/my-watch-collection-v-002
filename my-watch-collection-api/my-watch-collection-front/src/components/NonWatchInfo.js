import React from 'react'
import { useHistory } from 'react-router-dom'

const NonWatchInfo = ()  => {

  let history = useHistory()

  const handleBack = () => {
    history.push('/dashboard')
  }
    
  return (

    <div className='NonWatch-container'>
      < br/>
      < br/>
      <h2 className='NonWatch-text'>Non-Watch Information</h2>
      < br/>
      <p>Non-watch records are those that are not about watches but</p>
      <p>which contain information related to watches in some way;</p>
      <p>for example, watch winders, watch cases, etc.</p>
      < br/>
      <h3 className='NonWatch-text'>To add a non-watch record:</h3>
      < br/> 
      <ol className='NonWatch-OL'>
        <li>Click the ADD WATCH button</li> 
        <li>Enter a title for it in the Watch Maker input</li> 
        <li>Enter 'non-watch' in the Watch Name input</li> 
        <li>Enter 0 in the Date Bought/Gifted & Cost inputs</li>
        <li>Click the SAVE button to save the record</li>
        <li>Click the BACK TO DASHBOARD button to redisplay the dashboard</li>
        <li>Find and click the non-watch from the list to display it</li>
        <li>Click the EDIT THIS NON-WATCH button</li>
        <li>Use the Notes input and/or any other inputs to enter information</li>
        <li>If an image is available, click the Choose File button to upload it</li>
        <li>Click the SAVE button to save the record</li>
      </ol>
      < br/>
      <button onClick={handleBack} className='btn Back-button Button-text'>Back to dashboard</button>
    </div>  
  )   
}

export default NonWatchInfo
