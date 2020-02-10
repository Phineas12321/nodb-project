import React from 'react';
import './App.css';
import axios from 'axios'

import Family from './Components/Family'
import Progress from './Components/Progress'



class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      family: [],
      userInput: ''
    }

    this.addMember = this.addMember.bind(this)
    this.editMember = this.editMember.bind(this)
    this.buryMember = this.buryMember.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    axios.get('/api/family').then(res => {
      this.setState({family: res.data})
    }).catch(error => console.log('get request error'+ error))
  }

  addMember(name){
    axios.post('/api/family', {name}).then(res => {
      this.setState({family: res.data})
    }).catch(error => console.log('post request error'+error))
  }

  editMember(id, newName){
    axios.put(`/api/family/${id}`, {name: newName}).then(res => {
      this.setState({family: res.data})
    }).catch(error => console.log('put request error'+error))
  }

  buryMember(id){
    axios.delete(`/api/family/${id}`).then(res => {
      this.setState({family: res.data})
    }).catch(error => console.log('delete request error'+error))
  }

  handleChange(e){
    this.setState({userInput: e.target.value})
}

  render(){
    const famList = this.state.family.map(e => {
      return (
        <Family 
          member={e}
          addMember = {this.addMember}
          editMember = {this.editMember}
          buryMember = {this.buryMember}
          key = {e}
        />
      )
    })

    return (
        <div className="App">
          <section className='fam'>
            <h1>Family</h1>
            <div className='list-box'>
              <section>
                {famList}
              </section>
              <section className='input-button'>
                  <input className='fam-input' onChange={this.handleChange} />
                  <button className='family-button' onClick={() =>{this.addMember(this.state.userInput)}} >
                      add
                  </button>
              </section>
            </div>
          </section>
          <section>
            <Progress family = {this.state.family} />
          </section>
          
        </div>
    )
  }
  
}

export default App;
