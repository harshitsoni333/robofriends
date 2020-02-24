import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-light-green searchInput' 
                type='search' 
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;