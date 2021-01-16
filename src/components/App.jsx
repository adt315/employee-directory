import React from "react";
import Navbar from "./Navbar";
import User from "./User";
import { Component } from "react";
import axios from "axios"
import Search from "./Search";



class App extends Component {
  state = {
    employees:[],
    filteredUsers:[{}],
  }

  handleSearchChange = event => {
    console.log(event.target.value)
    var filter = event.target.value
    var filteredList = this.state.employees.filter(item => {
      var values = Object.values(item).join("").toLowerCase()
      return values.indexOf(filter.toLowerCase()) !== -1
    })
    this.setState({
      filteredUsers: filteredList
    })
  }

  componentDidMount(){
    axios.get("https://randomuser.me/api/?results=200").then(response => {
      console.log(response);
      this.setState({
        employees: response.data.results
      })

    })
  }

  render(){
    console.log(this.state)
    return (
    <div>
      <Navbar />
      <Search handleSearchChange={this.handleSearchChange}/>
      {this.state.employees.map(employee => <User {...employee}/>)}
      {/* <User employees={this.state.filteredUsers}/> */}
    </div>
  );}
}

export default App;
