import React from 'react'

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
                Progress
            </div>
        )
    }
}

export default Progress