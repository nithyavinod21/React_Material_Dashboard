import React from 'react';
import {CardContent,Card,CardActionArea,CardMedia,Grid, Paper, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles= makeStyles({
    root:{
        maxWidth:350,
        height:"100%"
    },
    media:{
        height:180
    }
})

const Product = ({prod}) => {
 
  const classes = useStyles();

  return (
    <Grid xs={12} sm={4} style={{marginBottom:10}} >
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia 
                className={classes.media} 
                image ={prod.img}
                title={prod.header} />
              </CardActionArea>
              <Typography gutterBottom variant='h6' component="h2">{prod.header}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">{prod.content}</Typography>
        </Card>
    </Grid>
  );
}

export default Product;
