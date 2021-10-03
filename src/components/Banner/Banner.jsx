import React from 'react'
import useStyles from './styles';


const Banner= () =>{
    const classes = useStyles();
    return(
        <div className={classes.banner}> 
          <img width="1300" height="500px" src="https://cdn.pixabay.com/photo/2017/09/11/15/34/animals-2739386_960_720.jpg" alt="Banner" name="Banner" />
        </div>
    );
};

export default Banner