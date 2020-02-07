import React from 'react';
import './App.css';
import axios from 'axios'



class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      family: []
    }

    this.addMember = this.addMember.bind(this)
    this.editMember = this.editMember.bind(this)
    this.buryMember = this.buryMember.bind(this)
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

  render(){
    return (
        <div className="App">
          App
        </div>
    )
  }
  
}

export default App;
