import React, { useState } from 'react';

const SearchField = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    // Trigger search on every change
    onSearch(newSearchTerm);
  };

  return (
    <div style={{fontSize: "2.5vh"}}>
      {/* <label htmlFor="search">Search:</label> */}
      icon
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter your search term"
        className='can'
        
        style={{
            width: "17vw",
            padding: "1%",
            border: 'none', outline: 'none',
            marginLeft: '1vw',
            fontSize: '2.5vh'
        }}
        // className="chote-dabbe"
      />
    </div>
  );
};

export default SearchField;
