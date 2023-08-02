import React, { useState } from 'react';
import { Autocomplete, Button, Chip, Grid, TextField } from '@mui/material';
import './App.css';

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const options = [
    { label: 'Income', value: 200 },
    { label: 'Expenses', value: 10 },
    { label: 'Rent', value: 15 },
    { label: 'Transport', value: 15 },
    { label: '+', value: '+' },
    { label: '-', value: '-' },
    { label: '*', value: '*' },
    { label: '/', value: '/' },
  ];


  const filterOptions = (options, { inputValue }) => {
    return options.filter(
      (option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };


  const handleOptionChange = (_, newOptions) => {
    setSelectedOptions(newOptions);
  };

  const validateExpression = () => {
    for (let i = 0; i < selectedOptions.length - 1; i++) {
      if (
        ['+', '-', '*', '/'].includes(selectedOptions[i].value) &&
        ['+', '-', '*', '/'].includes(selectedOptions[i + 1].value)
      ) {
        return false;
      }
    }
    return true;
  };

  const calculateResult = () => {
    let expression = '';
    for (const option of selectedOptions) {
      expression += option.value;
    }
    try {
      const evalResult = eval(expression);
      setResult(evalResult.toString());
    } catch (error) {
      setErrorMessage("Please use valid values to perform the operation")
    }
  };

  const handleSubmit = () => {
    if (
      selectedOptions.length >= 2 &&
      selectedOptions.some((option) => ['+', '-', '*', '/'].includes(option.value)) &&
      validateExpression()
    ) {
      setErrorMessage('');
      calculateResult();
    } else if (selectedOptions.length < 2) {
      setErrorMessage('Please select at least two values.');
    } else {
      setErrorMessage('Please make sure each math operation has values on both sides.');
    }
  };

  const handleDeleteChip = (chipToDelete) => () => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((option) => option !== chipToDelete)
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ p: 5 }}>
        <Autocomplete
          multiple
          options={options}
          getOptionLabel={(option) => option.label}
          onChange={handleOptionChange}
          filterOptions={filterOptions}
          value={selectedOptions}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                key={index}
                variant="outlined"
                label={option.label}
                onDelete={handleDeleteChip(option)}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
            />
          )}
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Calculate
        </Button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {result && <p>Result: {result}</p>}
      </Grid>F
    </Grid>
  );
};

export default App;
