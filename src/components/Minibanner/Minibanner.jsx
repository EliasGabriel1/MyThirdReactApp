import React from 'react';
import useStyles from './styles';

const Minibanner  = () => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
        <div>
            <div>
                <img width="500" height="300" src="https://cdn.pixabay.com/photo/2017/07/07/15/18/move-2481718_960_720.jpg" alt="" title=""/>
            </div>
        </div>

        <div>
            <div>
                <img  width="500" height="300"  src="https://cdn.pixabay.com/photo/2015/08/16/18/22/repair-891422_960_720.jpg" alt="" title=""/>
            </div>
        </div>

    </div>
    </>
  );
};

export default Minibanner;

