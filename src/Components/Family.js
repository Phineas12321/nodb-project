import React from 'react'

class Family extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isEditing: false,
            userInput: ''
        }
    }

    render(){
        return(
            <div>
                Family
            </div>
        )
    }
}

export default Family