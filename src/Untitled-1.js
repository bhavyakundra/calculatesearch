/ import * as React from 'react';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import { Grid } from '@mui/material';
// export default function LimitTags() {
//   const [value, setValue] = React.useState([]);
//   const [inputValue, setInputValue] = React.useState('');

//   const handleInputChange = (event, newInputValue) => {
//     setInputValue(newInputValue);

//     // Regular expression to match movie titles between tags
//     const tagRegex = /\b(?:The Shawshank Redemption|The Godfather|The Godfather: Part II|...)\b/gi;
//     const tagsInInput = newInputValue.match(tagRegex);
//     // Regular expression to match mathematical operands between tags
//     const operandRegex = /(\+|\-|\*|\/)/g;
//     const operandsInInput = newInputValue.match(operandRegex);
//     // Combine tags and operands to form the updated value
//     if (tagsInInput && operandsInInput) {
//       setValue(tagsInInput.concat(operandsInInput));
//     } else if (tagsInInput) {
//       setValue(tagsInInput);
//     } else if (operandsInInput) {
//       setValue(operandsInInput);
//     } else {
//       setValue([]);
//     }
//   };

//   return (
//     <Grid container spacing={2} sx={{ padding: '60px' }}>
//       <Grid item xs={8}>
//         <Autocomplete
//           freeSolo
//           autoSelect
//           multiple
//           fullWidth
//           id="multiple-limit-tags"
//           options={top100Films.map((film) => film.title)}
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//           inputValue={inputValue}
//           onInputChange={handleInputChange}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               placeholder="Tag"
//             />
//           )}
//         />
//       </Grid>
//     </Grid>
//   );
// }

// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
//   { title: 'City of God', year: 2002 },
//   { title: 'Se7en', year: 1995 },
//   { title: 'The Silence of the Lambs', year: 1991 },
//   { title: "It's a Wonderful Life", year: 1946 },
//   { title: 'Life Is Beautiful', year: 1997 },
//   { title: 'The Usual Suspects', year: 1995 }
// ];

// import React, { useState } from "react";
// import Autocomplete from "@mui/material/Autocomplete";
// import { TextField, Button, Grid } from "@mui/material";
// import * as math from "mathjs";


// const Calculator = () => {
//   const [expression, setExpression] = useState("");
//   const [totalResult, setTotalResult] = useState("");

//   const expenses = [
//     { name: "Rent", value: 1000 },
//     { name: "Groceries", value: 200 },
//     { name: "Utilities", value: 150 },
//     { name: "Transportation", value: 100 },
//     // Add more expenses as needed
//   ];

//   const handleInputChange = (event) => {
//     setExpression(event.target.value);
//   };

//   const calculateResult = () => {
//     try {
//       const result = math.evaluate(expression);
//       setTotalResult(result.toString());
//     } catch (error) {
//       setTotalResult("Error");
//     }
//   };

//   return (
//     <Grid container direction="column" alignItems="center">
//       <Autocomplete
//         freeSolo
//         multiple
//         options={expenses.map((expense) => expense.name)}
//         value={expression}
//         onChange={(_, newValue) => setExpression(newValue.join(""))}
//         inputValue={expression}
//         onInputChange={handleInputChange}
//         renderInput={(params) => (
//           <TextField {...params} label="Enter an expression" variant="outlined" />
//         )}
//       />
//       <Button variant="contained" color="primary" onClick={calculateResult}>
//         Calculate
//       </Button>
//       <h2>Total Result: {totalResult}</h2>
//     </Grid>
//   );
// };

// export default Calculator;
// // import React, { useState } from 'react';
// // import * as math from 'mathjs';

// // const Calculator = () => {
// //   const [input, setInput] = useState('');

// //   const handleInputChange = (event) => {
// //     setInput(event.target.value);
// //   };

// //   const handleKeyPress = (event) => {
// //     if (event.key === 'Enter') {
// //       calculateResult();
// //     }
// //   };

// //   const calculateResult = () => {
// //     try {
// //       const result = math.evaluate(input);
// //       setInput(result.toString());
// //     } catch (error) {
// //       setInput('Error');
// //     }
// //   };

// //   return (
// //     <div className="calculator">
// //       <input
// //         type="text"
// //         value={input}
// //         onChange={handleInputChange}
// //         onKeyPress={handleKeyPress}
// //       />
// //     </div>
// //   );
// };
