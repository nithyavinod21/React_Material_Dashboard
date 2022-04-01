import { AppBar, Box, Toolbar,Button, Typography,Tabs,Tab,useTheme,useMediaQuery } from '@mui/material';
import React from 'react';

import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from '../components/DrawerComp';
import { Login } from '../components/Login';
import SignUp from '../components/SignUp';
import ServiceComponent from '../components/ServiceComponent';
import Contact from '../components/Contact';
import ProductComponent from '../components/ProductComponent';
import About from '../components/About';

const Dashboard = () => {
  const theme=useTheme();
  const  isMatch= useMediaQuery(theme.breakpoints.down('md'));

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


  return (

     <React.Fragment>

      <AppBar sx={{background:"#063970"}}>
        <Toolbar>
            <AddBusinessRoundedIcon sx={{transform:"scale(2)"}}/>
           { isMatch ? (
            <>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     Course Products
             </Typography>
             <DrawerComp />
               </>
           ) :( 
               <>

            
            <Tabs sx={{marginLeft:"auto"}} indicatorColor='secondary' value={value} onChange={handleChange} textColor='inherit'>
            <Tab label="Products"></Tab>
            <Tab label="Services"></Tab>
            <Tab label="About Us"></Tab>
            <Tab label="Contact"></Tab>
          </Tabs>
          <Button sx={{marginLeft:"auto"}} variant="contained">Login</Button>

          <Button sx={{marginLeft:"10px"}} variant="contained">Sign Up</Button>
            </>
           ) }
            
    
        </Toolbar>
      </AppBar>

        <div style={{marginTop:"150px"}}>

           <TabPanel value={value} index={0}>
                <ProductComponent /> 
            </TabPanel>
            <TabPanel value={value} index={1}>
             <ServiceComponent />
            </TabPanel>

            <TabPanel value={value} index={2}>

                <About />
            </TabPanel>
            
            <TabPanel value={value} index={3}>
                <Contact />
            </TabPanel>
            </div>

      </React.Fragment>
  
  );
}

export default Dashboard;
