import React from "react";
import Search from "../Search/search"

function Header(props) {
  console.log(props)
    return (
      <header className="header container bg-dark text-light">
        <h1>Employee Directory</h1>
        <form className="form-inline">
        
        <Search searchTerm={props.searchTerm} handler={props.handler}/>
          
        <button type="submit" className="btn btn-secondary mb-2">Search</button>        
        </form>
      </header>
    );  
}

export default Header;