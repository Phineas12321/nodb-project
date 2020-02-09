import React from 'react'

class WeekEvents extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            // events: this.props.member.name
        }
    }

    render(){
        // for(let i = 0; i < this.props.family.length; i++){
        //     if(this.props.family[i].isDead){
        //         this.setState({events: `${this.props.family[i].name} is dead`})
        //     }
        // }

        return(
            <div className='week-events-style' >
                <h1>THIS WEEK ON THE TRAIL</h1>
                <div>
                    {/* {this.state.events} */}
                    hello
                </div>
            </div>
        )
    }
}

export default WeekEvents