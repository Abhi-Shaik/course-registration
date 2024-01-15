import React from 'react'
import SearchField from './SearchField'
import Programs from './Programs';
const Sidebar = ({programs, setSelectedProgram, setAddClick,setvariable}) => {

  const handleSearch = (searchTerm) => {
    // Implement your search logic here, e.g., fetch data from an API
    console.log(`Performing search for: ${searchTerm}`);
  };

  const handleAddClick = (e) => {
    setAddClick(true);
    setvariable(true);
    setSelectedProgram(false);
  };

  return (
    <div style={{marginLeft: "1vw" ,marginRight: "5vw"}}>
      <div style={{display: "flex" , justifyContent:"space-between" ,alignItems: "center"}}>
      <h1>Programs</h1>
      <button style={{marginLeft:"11vw"}} onClick={handleAddClick}>add</button>
      </div>
      <div>
        count
      </div>
      <SearchField onSearch={handleSearch} />
      <div style={{display: "flex" , justifyContent: "space-around"}}>
        <button className='filter'>All</button>
        <button className='filter'>Data</button>
        <button className='filter'>Finance</button>
        <button className='filter'>Web3</button>
      </div>
      <Programs programs={programs} setSelectedProgram={setSelectedProgram} setAddClick={setAddClick}/>
      {/* {console.log(programs)} */}
    </div>
  )
}

export default Sidebar