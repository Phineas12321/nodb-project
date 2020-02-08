import React from 'react'

function NextWeekButton(props){
    return(
        <div>
            <button
                className='next-btn'
                onClick={()=>{props.nextWeekFn()}}
            >Next Week{'>>'} </button>
        </div>
    )
}

export default NextWeekButton