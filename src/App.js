import React, {useState, useEffect} from "react";
import users from "./utils/users.json"
import EmployeeWrapper from "./components/EmployeeWrapper";


function App() {  
  const [theUsers, setTheUsers] = useState([]);  
  const [searchTerm, setSearchTerm] = useState("");
  
  
  useEffect(() => {
    setTheUsers(users)
  }, [])

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
    
    const filteredUsersArrayByName = users.filter(user => user.name.first.toLowerCase().includes(searchTerm.toLowerCase()))
    setTheUsers(filteredUsersArrayByName);

    
  }

  
  return (
    <div>
      <header className="header container bg-dark text-light mb-3 pb-2">
        <h1>Employee Directory</h1>
        <input 
          type="search" 
          placeholder="search employee"
          className="form-control-plaintext bg-light mb-2" 
          name="searchInput"            
          onChange={handleSearchChange}/>
      </header>
      <EmployeeWrapper 
      users={theUsers}
      />
    </div>
  );
}

export default App;