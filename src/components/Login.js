import React from 'react';
import {Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography} from '@mui/material';
 import {LockOutlined} from '@mui/icons-material';
 import {Form, Formik} from 'formik';
 import * as Yup from 'yup';
export const Login = ({handleChange}) => {

    const avatarStyle={backgroundColor:'green'};

    const marginTop ={margin:'5px'}

    const paperStyle={padding:20,height:'70vh',width:350,margin:"20px auto"};
    const butStyle ={margin:'8px 0'}

    const initialValues={
        username:'',
        password:''
    }

    const validationSchema ={
        username :Yup.string().required("Required"),
        password :Yup.string().required("Required")
    } 
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
       <Avatar style={avatarStyle}><LockOutlined /></Avatar>
        <h2>Sign In</h2> 
        <Formik initialValues={initialValues} validationSchema={validationSchema}>
         <Form>
         <TextField id="username" name="username" label="User Name" placeholder='Enter the User Name' variant="standard" fullWidth required style={marginTop} />
         <TextField id="password" name="password" label="Password" placeholder='Enter the Password' variant="standard" fullWidth required style={marginTop} />  
         <FormControlLabel  control={<Checkbox color="primary" />} label="Remember Me" />
        <Button type="submit" style={butStyle} color="primary" variant="contained" fullWidth>Sign In</Button>
        </Form> 
        
        </Formik>
        <Typography >
         <Link href="#">Forgot Password ?</Link>
     </Typography>
     <Typography >Do you have an account ?
         <Link href="#" onClick={()=>handleChange("event" ,1)}>Sign Up</Link>
     </Typography>
     
      </Paper>
  
    </Grid>
    
  )
}
