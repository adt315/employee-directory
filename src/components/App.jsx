import React from "react";
import Navbar from "./Navbar";
import User from "./User";
import employees from "../employees";


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


function App() {
  return (
    <div>
      <Navbar />
      {employees.map(createUser)}
    </div>
  );
}

export default App;
