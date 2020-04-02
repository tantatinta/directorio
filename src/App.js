import React, {useState} from "react";
import Header from "./components/Header/Header";
import users from "./utils/users.json"
import EmployeeWrapper from "./components/EmployeeWrapper/EmployeeWrapper";


function App() {  
  const [theUsers, setTheUsers]=useState(users)
  const [masterList, setMasterList]=useState(users)
  const [searchTerm, setSearchTerm]=useState("")
  const handleSearchChange=(term)=>{
    console.log(term)
    setSearchTerm(term)
  }
  return (
    <div>
    <Header searchTerm ={searchTerm} handler={handleSearchChange}/>
    <EmployeeWrapper users={theUsers} searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
