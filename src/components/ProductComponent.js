import { Grid } from '@mui/material';
import React from 'react';
import {courses} from '../constants/ProductConstant';
import Product from './Product';
const ProductComponent = () => {
  return (
    <Grid container >
        {
            courses.map(prod=><Product prod={prod} />)
        }
    </Grid>
  );
}

export default ProductComponent;
