import React from 'react'

import Week from './Week'
import WeekEvents from './WeekEvents'
import NextWeekButton from './NextWeekButton'

class Progress extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            nextWeek: () => {},
            week: 0
        }
    }

    render(){
        return(
            <div>
                <Week/>
                <WeekEvents/>
                <NextWeekButton/>
            </div>
        )
    }
}

export default Progress