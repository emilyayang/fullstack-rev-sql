import React from 'react';
  
var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={props.handleInputChange}/>
    <button className="btn hidden-sm-down" onClick={props.onSearch}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

export default Search;