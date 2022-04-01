import React from 'react';
import {Avatar, Grid, Paper,Typography,TextField,Radio,RadioGroup,FormControlLabel,Checkbox,Button,FormControl,FormLabel} from '@mui/material';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
const SignUp = () => {

   const avatarStyle ={backgroundColor:'#1bbd7a'} ;
   const paperStyle={padding:20,width:350,margin:"0 auto"};
   const headerStyle={margin:0}

   const marginTop ={marginTop:5}
  return (
    <Grid>
        <Paper elevation={10}  style={paperStyle}>
            <Grid >
               <Avatar style={avatarStyle} ><AddCircleOutlineSharpIcon /></Avatar>
            </Grid>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant='caption'>Please fill the form</Typography>          
           <form>
            <TextField id="name" label="Name" variant="standard" placeholder='Enter the Name' style={marginTop} fullWidth required />
            <TextField id="email" label="Email" variant="standard" placeholder='Enter the Email' style={marginTop} fullWidth required />
           
           <FormControl style= {marginTop}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
           <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group" style={{display:'initial'}}
             >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        </FormControl>
        <TextField id="phone" label="Phone Number" variant="standard" placeholder='Enter your Phone Number' style={marginTop} fullWidth required />
        <TextField id="password" label="Password" variant="standard" placeholder='Enter your Password' style={marginTop} fullWidth required />
        <TextField id="confirmpassword" label="Confirm Password" variant="standard" placeholder='Enter your Confirm Password' style={marginTop} fullWidth required />

        <FormControlLabel  control={<Checkbox color="primary" />} label="I agree the terms and Conditions" />
       
        </form>
        <Button variant="contained">Sign Up </Button>
        </Paper>
    </Grid>
  );
}

export default SignUp;
