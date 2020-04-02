import React from "react";



  const Search =(props)=>{
    const handleInputChange =(event)=>{
      console.log(event.target.value)
      props.handler(event.target.value)
      
    }

    

    return (
      <div className="form-group mb-2">
        <input type="text" onChange={handleInputChange} className="form-control-plaintext bg-light" name="searchInput" value={props.searchTerm}/>
      </div>
    );
  
}

export default Search;