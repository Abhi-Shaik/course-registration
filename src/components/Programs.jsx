import React, { useState } from 'react';
import { Stack, Button} from '@mui/material';

const Programs = ({ programs, setSelectedProgram, setAddClick}) => {
  

  const handleCardClick = (program) => {
    setSelectedProgram(program);
    setAddClick(false);
  };

  return (
    <Stack spacing={2}>
      {programs.map((program, index) => (
        <div key={index}>
          <Button variant="outlined" fullWidth onClick={() => handleCardClick(program)}>
            {program.name} {/* Display program name or other relevant information */}
          </Button>
        </div>
      ))}
    </Stack>
  );
};

export default Programs;





// const Programs = ({program}) => {
//   {console.log(program)};
//   let componentsArray=[1,2,3];
//   return (
//     <Stack spacing={2}>
//         {componentsArray.map((Component, index) => (
//           <div key={index}>
//             {Component}
//         </div>
//       ))}
//     </Stack> 
//   )
// }
