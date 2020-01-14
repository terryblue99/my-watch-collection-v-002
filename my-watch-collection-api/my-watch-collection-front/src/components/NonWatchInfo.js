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
      <p>Non-watch records are those that are not about watches</p>
      <p>but which contain items related to watches in some way;</p>
      <p>for example, watch winders, watch cases, watch tools, etc.</p>
      <p>Or simply just any type of related information.</p>
      < br/>
      <h3 className='NonWatch-text'>To add a non-watch record</h3>
      < br/> 
      <ol className='NonWatch-OL'>
        <li>Click the <span className='Dark-red-color'>ADD WATCH</span> button</li> 
        <li>Enter a title for it in the <span className='Dark-red-color'>Watch Maker</span> input</li> 
        <li>Enter <span className='Dark-red-color'>non-watch</span> in the <span className='Dark-red-color'>Watch Name</span> input</li> 
        <li>Enter <span className='Dark-red-color'>0</span> in the <span className='Dark-red-color'>Date Bought/Gifted</span> & <span className='Dark-red-color'>Cost</span> inputs</li>
        <li>Click the <span className='Dark-red-color'>SAVE</span> button to save the record</li>
        <li>Click the <span className='Dark-red-color'>BACK TO DASHBOARD</span> button to redisplay the dashboard</li>
        <li>Find and click on the non-watch from the list to display it</li>
        <li>Click the <span className='Dark-red-color'>EDIT THIS NON-WATCH</span> button</li>
        <li>Use the <span className='Dark-red-color'>Notes</span> input and/or any other inputs to enter information</li>
        <li>If an image is available, click the <span className='Dark-red-color'>Choose File</span> button to upload it</li>
        <li>Click the <span className='Dark-red-color'>SAVE</span> button to save the record</li>
      </ol>
      < br/>
      <button onClick={handleBack} className='btn Back-button Button-text'>Back to dashboard</button>
    </div>  
  )   
}

export default NonWatchInfo
