import React from "react";

const EmployeeCard =(props)=> {
  return (
      <>
      {props.users.map(employee => (
        <tr key={employee.login.uuid}>    
      
        
          <td ><img src={employee.picture.thumbnail} alt="headshot of {employee.name.first}" /> </td>
          <td >{employee.name.first} {employee.name.last}</td>
          <td >{employee.phone}</td>
          <td >{employee.email}</td>
          <td >{employee.dob.date}</td>          
      
        </tr>
      ))}
      </>
    );

}

export default EmployeeCard;