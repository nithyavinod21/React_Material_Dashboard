import React from 'react';
import {CardContent,Card,Grid, Paper, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {posts} from '../constants/ServiceConstant';

 const useStyles=makeStyles({
     section:{
         height:"100%",
         textAlign:"center"
     }
 })

const ServiceComponent = () => {
 const classes=useStyles();

return (
   <Grid container layout="row">
        {
            posts.map( post=>         
            (
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.section}>
                        <Card elevation={0}>
                         <Grid ><img src={post.img}/></Grid>
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="h2">{post.header}</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">{post.content}</Typography>
                             </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                
            )

            )
        }
   </Grid> 
  );
}

export default ServiceComponent;
