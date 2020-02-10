import React from 'react'
import '../App.css'

class Family extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isEditing: false,
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    handleChange(e){
        this.setState({userInput: e.target.value})
    }

    toggleEdit(){
        this.setState({isEditing: !this.state.isEditing})
    }

    render(){
        return(
            <div className='fam-box'>
                {this.state.isEditing?(
                    <div>
                        <input className='fam-input' onChange={this.handleChange} />
                        <button className='family-button'
                            onClick={()=>{
                                this.props.editMember(this.props.member.id, this.state.userInput)
                                this.toggleEdit()
                            }} 
                        >edit</button>
                    </div>
                ) : (
                    <div className='member-button'>
                       <button className='family-button' onClick={()=>{this.props.buryMember(this.props.member.id)}} >{'-'} </button>
                        <p onDoubleClick={this.toggleEdit} className='family-list'>
                            {this.props.member.name}
                        </p> 
                    </div>
                    
                )}
            </div>
        )
    }
}

export default Family