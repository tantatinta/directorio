import React from "react";
// import "./style.css";



import EmployeeCard from '../EmployeeCard'
function EmployeeWrapper(props) {
  

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">image</th>
            <th scope="col">name</th>
            <th scope="col">phone</th>
            <th scope="col">email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <EmployeeCard 
          users={props.users} 
          handler={props.handler}
          searchEmployee={props.searchEmployee}
          />
        </tbody>
      </table>
    </div>  
  )
  
}
export default EmployeeWrapper;