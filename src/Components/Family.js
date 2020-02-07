import React from 'react'
import '../App.css'

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
                <h1>
                    Family
                </h1>
                <p className='family-list'>
                    {this.props.member.name}
                </p>
            </div>
        )
    }
}

export default Family