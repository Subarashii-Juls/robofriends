import React from "react";

const SearchBox = ({searchfield, textChange}) => {
    return(        
        <div className='pa2'>
            <input className='pa3 b--green bg-lightest-blue'
                type='search' 
                placeholder = 'Search Robots...'
                onChange = {textChange}/>
        </div>
    );
}

export default SearchBox;