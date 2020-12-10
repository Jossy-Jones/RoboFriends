import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className="search-box">
            <input
                type="search"
                placeholder="Search Robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;