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
      <p>Non-Watch records are not about saved watches but can contain</p>
      <p>any type of information related to watches. For example, winders, </p>
      <p>cases, tools, straps, bracelets, spare parts, 'how to' info, etc.</p>
      < br/>
      <p><span className='Dark-red-color'>Note:</span> Information about a specific saved watch can be entered in</p>
      <p className='Info-tab'>the <span className='Midnight-blue-color'>Notes</span> input field of that watch.</p>
      < br/>
      <h3 className='NonWatch-text'>To add a Non-Watch record</h3>
      < br/>
      <ol className='NonWatch-OL'>
        <li>Click the <span className='Midnight-blue-color'>ADD NON WATCH</span> button</li> 
        <li>Enter a title for it in the <span className='Midnight-blue-color'>Title</span> input</li>
        <li>Use the <span className='Midnight-blue-color'>Notes</span> input and/or other input/s to enter information</li>
        <li>If an image is available, click the <span className='Midnight-blue-color'>Choose File</span> button to upload it</li>
        <li>Click the <span className='Midnight-blue-color'>SAVE</span> button to save the record</li>
      </ol>
      < br/>
      <p><span className='Dark-red-color'>Note:</span> The <span className='Midnight-blue-color'>non-watch</span> field is fixed and uneditable, as this will</p>
      <p className='Info-tab'>be used to recognize non-watch records, to be processed accordingly. It would also be good idea to use words that you may want to search on later.</p>
      < br/>
      <button onClick={handleBack} className='btn Back-button Button-text'>Back to dashboard</button>
    </div>  
  )   
}

export default NonWatchInfo
