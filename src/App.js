import React from 'react'
import Sidebar from './components/Sidebar'
import ProgramForm from './components/ProgramForm'
import { useState } from 'react'
const App = () => {

  const [programs, setPrograms] = useState([{name:"abhishek"}]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [addClick, setAddClick]= useState(false);
  const [variable, setvariable]= useState(false);

  const handleSaveProgram = (newProgram) => {
    // Update the programs state when a new program is saved
    setPrograms([...programs, newProgram]);
  };
  return (
    <div style={{display: "flex"}}>
      <Sidebar programs={programs} setSelectedProgram={setSelectedProgram} setAddClick={setAddClick} setvariable={setvariable}/>
      {(addClick || variable || selectedProgram) && (
        <ProgramForm onSaveProgram={handleSaveProgram} setSelectedProgram={setSelectedProgram} selectedProgram={selectedProgram} addClick={addClick} setAddClick={setAddClick}/>
      )}
    </div>
  )
}

export default App