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
            events: "You are headed for Oregon City.  Adventure lies ahead!",
            subEvents: 
            [
                `You come upon a river and try to walk across.  One of your family members cramps up and slips into the ice-cold depths.  Someone in your family has died.`,
                `Someone in your family had a baby!  Although the trail isn't the most ideal place to raise a child, you welcome this addition to your family with open arms and a warm heart`,
                `You argued with that weird guy in your caravan.(you wish he would stay away from your children, or better yet, died)`,
                `A trading post is in site!  The prices are high, but you manage to barter your way into getting a blanket and some rations.(yay warmth)`,
                `Bandits came in the night and stole some rations.(You should consider setting up a night watch)`,
                `You find a bison who has lost their herd.  You pick up your rifle and aim.  You take a shot.  Another.  And one more. The bison finally slumps over and you carefully make your way over and skin the beast.  You have enough rations to last a couple weeks.`,
                `One of your wagon wheels broke. It takes time, but you're able to fix it.  The caravan left you behind and you have to catch up.`,
                `Rattlesnakes are a common site, but they're still dangerous!  One of your family members tries to play with one.  The poison spreads fast.  Someone in your family has died.`,
                `Field mice found their way into your wagon.  You take everything out and find they're in your rations too.  You threaten them with your big scary boots and they scurry away.  You didn't lose much, but knowing mice were in the food makes you want to hurl.`,
                `Rations are low and your family is starving.(You better find some meat soon)`,
                `You run into a traveller who says they're starving.  You tell them you don't have enough food to spare, but the traveller persists.  You get into a fight and the traveller is left dead.  Members of your family are now afraid to talk to you, as they should be.(you murderer)`,
                `The trail can be boring, so the children of your family come up with a new game.  It ends horribly and an arm breaks.(better an arm than a leg)`,
                `The brush on the trail is unkempt and full of ticks.  You have neglected to check your family for those parasites and one of your family members is developing a serious case of lyme disease.  You try your best to treat the disease and get set back a couple days.`,
                `You come across a pile of rocks that smells like death.  Atop the pile, you see what seems to be your cousin's favorite necklace.  The caravan moves on as you weep into the rocks.`,
                `A mountain blocks your path.  Your wagon is barely too heavy to push up the steep path, and you have to let go of some personals.  A large painting of your family, your accordion, and some china dishes are left behind`,
                `A party of bandits demands you give them all of your rations.  One of your family members tries to stand up to them, but the bandits are too much.  Out of fear and shock, you let the bandits shuffle through your wagon.  Someone in your family has died.`,
                `Your family is complaining about the length of the trail.  You decide to rest for a day.`,
                `You have a dream where you are in Oregon, living in a house, protected from the elements.  You wake up on the ground and soaked from rain.`
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
        }else if(this.state.week === 20){
            this.setState({events: 'Congratulations!  You made it!'})
        }

        if(this.props.family.length === 0){
            this.setState({randomEvent: 'Everyone in your family has died'})
        }else if(this.state.week >= 20){
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