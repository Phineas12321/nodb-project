import React from 'react'
import '../App.css'

function Week(props){
    return(
        <div>
            <div className='week-style'>
                Week {props.eachFirstWeek}
                {props.eachSecondWeek}
            </div>
            
        </div>
    )
}

export default Week