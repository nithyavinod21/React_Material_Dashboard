import React from 'react';
import {Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, Tab, Tabs, TextField, Typography} from '@mui/material';
import { Login } from '../components/Login';
import SignUp from '../components/SignUp';
const LoginContainer = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

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
              <Box >
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

      const paperStyle={width:400,margin:"20px auto"}

  return (
    <Paper elevation={10} style={paperStyle}>
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab label="Sign In" />
     
      <Tab label="Sign Up" />
      
    </Tabs>
    <TabPanel value={value} index={0}>
       <Login handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp />
      </TabPanel>
    </Paper>
  );
}

export default LoginContainer;
