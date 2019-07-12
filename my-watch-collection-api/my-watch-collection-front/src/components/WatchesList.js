import React from 'react'

const WatchesList = ({watches}) => {
  
   console.log('***WatchesList: ', watches)

  
   let watchList

    if (watches.watches) {
       watchList = watches.watches.map(watch => (
            <p key={watch.id}>{watch.watch_name}</p>
        )) 
        
    } else { watchList = watches.watches }

    return (
        <div className='container'>
            {watchList}
        </div>
    )
   
}

export default WatchesList
