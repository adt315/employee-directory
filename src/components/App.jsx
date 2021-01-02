import React from "react";
import Navbar from "./Navbar";
import User from "./User";
import employees from "../employees";

function App() {
  return (
    <div>
      <Navbar />
      <User 
        img={employees[0].img}
        name= {employees[0].name}
        phone= {employees[0].phone}
        email= {employees[0].email}
        birthday= {employees[0].birthday}
      />
    </div>
  );
}

export default App;
