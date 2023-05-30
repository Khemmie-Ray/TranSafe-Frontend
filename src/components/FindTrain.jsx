import * as React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const FindTrain = () => {
    const [data, setData] = React.useState({ location:'', time: '', day: ''});

    const handleChange = (event) => {
      setData(event.target.value);
    };

  return (
    <div className='text-gray-700' id='findTrain'>
        <h2 className='text-2xl font-bold'>Let's help you find a train</h2>
        <div className='mt-8'>
    <Box sx={{ minWidth: 120 }} >
       <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          size="small"
          onChange={handleChange}
        >
          <MenuItem value={"Lagos-Abeokuta"}>Lagos-Abeokuta</MenuItem>
          <MenuItem value={20}>Abeokuta - Ibadan</MenuItem>
          <MenuItem value={30}>Ibadan - Lagos</MenuItem>
          <MenuItem value={30}>Abeokuta - Lagos</MenuItem>
          <MenuItem value={30}>Ibadan - Abeokuta</MenuItem>
          <MenuItem value={30}>Lagos - Ibadan</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{marginTop: 4 }}>
        <InputLabel id="demo-simple-select-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          size="small"
          onChange={handleChange}
        >
          <MenuItem value={10}>Morning</MenuItem>
          <MenuItem value={20}>Afternoon</MenuItem>
          <MenuItem value={30}>Evening</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{marginTop: 4 }}>
        <InputLabel id="demo-simple-select-label">Day</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Day"
          size="small"
          onChange={handleChange}
        >
          <MenuItem value={10}>Monday</MenuItem>
          <MenuItem value={20}>Tuesday</MenuItem>
          <MenuItem value={30}>Wednessday</MenuItem>
          <MenuItem value={30}>Thursday</MenuItem>
          <MenuItem value={30}>Friday</MenuItem>
          <MenuItem value={30}>Saturday</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
    </div>
  )
}

export default FindTrain;



