import React, { useState } from 'react'
import CalendarCard from "./CalendarCard"
import PropTypes from 'prop-types';
import 'react-calendar/dist/Calendar.css'
import { Tabs, Tab, Typography, Box } from "@mui/material"
import { MdLocationPin } from "react-icons/md"
import timeSchedule from '../timeSchedule';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Schedule = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div>
        <h2 className="text-white text-center text-3xl font-bold my-4">Today's Schedule</h2>
        <div className="bg-white lg:w-4/5 mx-auto lg:flex p-3 w-[100%]">
           <div className="lg:w-1/3 w-[100%] mt-auto p-4 mb-auto text-gray-700 text-center">
            <p className='font-semibold'>Make your bookings</p>
            <h3 className='text-3xl font-bold mb-6'>{currentTime}</h3>
           <CalendarCard /> 
            </div> 
            <div className="lg:w-2/3 w-[100%]"> 
            <Box sx={{ borderBottom: 1, borderColor: 'divider', color: "white"}}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Morning" {...a11yProps(0)} className="font-bold" />
                <Tab label="Afternoon" {...a11yProps(1)} />
                <Tab label="Evening" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            {timeSchedule.filter((data) => data.time.morning)
                .map((info) => (
                    <div
                    className="lg:flex bg-green-100 w-full justify-between py-4 px-6 rounded-md text-gray-700 mb-4 hover:border-x-4 border-green-700"
                    key={info.time.morning}
                    >
                    <div>
                        <h3 className="font-semibold">{info.time.morning}</h3>
                        <p className="flex items-center font-bold">
                        <MdLocationPin className="text-green-900 font-xl" /> Departure: {info.departure}
                        </p>
                    </div>
                    <div className='mt-6'>
                        <p className="flex items-center font-bold">
                        <MdLocationPin className="text-green-900 font-xl" /> Destination: {info.destination}
                        </p>
                        <p className="font-semibold">{info.distance}</p>
                    </div>
                    </div>
            ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
            {timeSchedule.filter((data) => data.time.afternoon)
                .map((info) => (
                    <div
                    className="lg:flex bg-green-100 w-full justify-between py-4 px-6 rounded-md text-gray-700 mb-4 hover:border-x-4 border-green-700"
                    key={info.time.afternoon}
                    >
                    <div>
                        <h3 className="font-semibold">{info.time.afternoon}</h3>
                        <p className="flex items-center font-bold">
                        <MdLocationPin className="text-green-900 font-xl" /> Departure: {info.departure}
                        </p>
                    </div>
                    <div className='mt-6'>
                        <p className="flex items-center font-bold">
                        <MdLocationPin className="text-green-900 font-xl" /> Destination: {info.destination}
                        </p>
                        <p className="font-semibold">{info.distance}</p>
                    </div>
                    </div>
            ))}
            </TabPanel>
            <TabPanel value={value} index={2}>
            {timeSchedule.filter((data) => data.time.evening)
                .map((info) => (
                    <div
                    className="lg:flex bg-green-100 w-full justify-between py-4 px-6 rounded-md text-gray-700 mb-4 hover:border-x-4 border-green-700"
                    key={info.time.evening}
                    >
                    <div>
                        <h3 className="font-semibold">{info.time.evening}</h3>
                        <p className="flex items-center font-bold">
                        <MdLocationPin className="text-green-900 font-xl" /> Departure: {info.departure}
                        </p>
                    </div>
                    <div className='mt-6'>
                        <p className="flex items-center font-bold">
                        <MdLocationPin className="text-green-900 font-xl" /> Destination: {info.destination}
                        </p>
                        <p className="font-semibold">{info.distance}</p>
                    </div>
                    </div>
            ))}
            </TabPanel>
            </div>
        </div>
    </div>
  )
}

export default Schedule