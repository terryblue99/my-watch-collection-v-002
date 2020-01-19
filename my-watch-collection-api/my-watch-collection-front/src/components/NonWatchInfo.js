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
      <p>which contain any type of information related to watches in some</p>
      <p>way. For example, watch winders, watch cases, watch tools, etc.</p>
      < br/>
      <h3 className='NonWatch-text'>To add a non-watch record</h3>
      < br/> 
      <ol className='NonWatch-OL'>
        <li>Click the <span className='Dark-red-color'>ADD NON WATCH</span> button</li> 
        <li>Enter a title for it in the <span className='Dark-red-color'>Non-Watch Title</span> input</li>
        <li>Use the <span className='Dark-red-color'>Notes</span> input and/or other input/s to enter information</li>
        <li>If an image is available, click the <span className='Dark-red-color'>Choose File</span> button to upload it</li>
        <li>Click the <span className='Dark-red-color'>SAVE</span> button to save the record</li>
      </ol>
      < br/>
      <button onClick={handleBack} className='btn Back-button Button-text'>Back to dashboard</button>
    </div>  
  )   
}

export default NonWatchInfo
