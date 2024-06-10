import React from 'react'

function Progress({progress,color}) {
    const styles={
       width:`${progress}%`,
       backgroundColor:color||'green',
       height:30,
       borderRadius:20
        
    }
  return (
    <div className='progress-container'>
          <div className='progress-row'>
            <div style={styles}>{progress}%</div>
          </div>

    </div>
  )
}

export default Progress