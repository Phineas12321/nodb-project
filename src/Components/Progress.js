import React from 'react'
import '../App.css'

import Week from './Week'
import WeekEvents from './WeekEvents'
import NextWeekButton from './NextWeekButton'

class Progress extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            nextWeek: () => {},
            firstWeeks: [1,2,3,4,5,6,7,8,9,10],
            secondWeeks: [11,12,13,14,15,16,17,18,19,20],
            week: 0
        }
    }

    

    render(){

        let eachFirstWeek = this.state.firstWeeks.map((e)=>{
            return(
                <Week 
                    eachFirstWeek={e}
                    week={this.state.week} 
                    nextWeek={this.state.week}
                />
            )
        })

        let eachSecondWeek = this.state.secondWeeks.map((e)=>{
            return(
                <Week 
                    eachSecondWeek={e}
                    week={this.state.week} 
                    nextWeek={this.state.week}
                />
            )
        })

        return(
            <div>
                <header className='week'>
                    <section className='on-trail' >
                        Weeks on the Trail
                    </section>
                    <section className='each-first-week'>
                        {eachFirstWeek}
                    </section>
                    <section className='each-second-week' >
                        {eachSecondWeek}
                    </section>
                    
                </header>
                <WeekEvents/>
                <NextWeekButton/>
            </div>
        )
    }
}

export default Progress