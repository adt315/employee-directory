import React from "react";
import Navbar from "./Navbar";
import User from "./User";
import employees from "../employees";
import { Component } from "react";
import axios from "axios"
import Search from "./Search";


// // this might need to go in data.jsx
// console.log(employees);
// const [a, b] = employees;
// console.log(a);
// const {id, img, name, phone, email, birthday} = a;
// console.log(img);


function createUser(employee) {
  return <User 
    key={employee.id}
    img={employee.img}
    name={employee.name}
    phone={employee.phone}
    email={employee.email}
    birthday={employee.birthday}
  />
}

class App extends Component {
  state = {employees:[]}

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
      <Search />
      {this.state.employees.map(employee => <User {...employee}/>)}
    </div>
  );}
}

export default App;
