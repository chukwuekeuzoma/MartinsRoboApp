import React from "react";

function  SearchBox({searchChange}) {
    return(
        <div className="pa2">
          <input  className="pa3 b b--red bg-lightest-red"
          type ="text" 
          placeholder="martins...search" 
          onChange={searchChange}
          />  
        </div>
    )
};
 
export default SearchBox;