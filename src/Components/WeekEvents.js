import React from 'react'
import '../App.css'

class WeekEvents extends React.Component{
    constructor(props){
        super(props)


    }

    

    render(){

        return(
            <div className='week-events-style' >
                <h1>THIS WEEK ON THE TRAIL</h1>
                <div className='done-size'>
                    {this.props.events}
                </div>
                <p className='rand-event-style'>
                {this.props.randomEvent}
                </p>
            </div>
        )
    }
}

export default WeekEvents