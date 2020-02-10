import React from 'react'
import '../App.css'

import Week from './Week'
import WeekEvents from './WeekEvents'
import NextWeekButton from './NextWeekButton'

class Progress extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            firstWeeks: [1,2,3,4,5,6,7,8,9,10],
            secondWeeks: [11,12,13,14,15,16,17,18,19,20],
            week: 1,
            dead: 0,
            events: 'You are going on the Oregon Trail.  Adventure lies ahead!',
            subEvents: 
            [
                `You come upon a river and try to walk across.  One of your family members cramps up and slips into the ice-cold depths.  Someone in your family has died.`,
                `Someone in your family had a baby!  Although the trail isn't the most ideal place to raise a child, you welcome this addition to your family with open arms and a warm heart`,
                `You argued with that weird guy in your caravan(you wish he would stay away from your children, or better yet, died).`,
                `A trading post is in site!  The prices are high, but you manage to barter your way into getting a blanket and some rations.(yay warmth)`,
                `Bandits came in the night and stole some rations.(You should consider setting up a night watch.)`,
                `You find a bison who has lost their herd.  You pick up your rifle and aim.  You take a shot.  Another.  And one more. The bison finally slumps over and you carefully make your way over and skin the beast.  You have enough rations to last a couple weeks.`,

            ],
            randomEvent: ''
        }

        this.nextWeekFn = this.nextWeekFn.bind(this)
    }

    nextWeekFn(){
        this.setState({week: this.state.week+1})
        for(let i =0; i<this.state.firstWeeks.length; i++){
            if(this.state.firstWeeks[i] <= this.state.week){
                this.state.firstWeeks[i] = 'done'
            }
        }
        for(let i =0; i<this.state.secondWeeks.length; i++){
            if(this.state.secondWeeks[i] <= this.state.week){
                this.state.secondWeeks[i] = 'done'
            }
        }
        if(this.props.family.length === 0){
            this.setState({events: `GAME OVER`})
        }else if(this.state.week === 1){
            this.setState({events: ''})
        }else if(this.state.week >= 20){
            this.setState({events: 'Congratulations!  You made it!'})
        }

        if(this.state.week >= 20 || this.props.family.length === 0){
            this.setState({randomEvent: ''})
        }else if(this.state.week > 0){
            this.setState({randomEvent: this.state.subEvents[Math.floor(Math.random()*this.state.subEvents.length)]})
        }
    }

    render(){

        

        let eachFirstWeek = this.state.firstWeeks.map((e)=>{
            return(
                <Week 
                    eachFirstWeek={e}
                    week={this.state.week} 
                    nextWeek={this.state.week}
                    key = {e}
                />
            )
        })

        let eachSecondWeek = this.state.secondWeeks.map((e)=>{
            return(
                <Week 
                    eachSecondWeek={e}
                    week={this.state.week} 
                    nextWeek={this.state.week}
                    key = {e}
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
                <WeekEvents randomEvent = {this.state.randomEvent} events = {this.state.events} familyArr ={this.props.familyArr} />
                <NextWeekButton nextWeekFn ={this.nextWeekFn} />
            </div>
        )
    }
}

export default Progress