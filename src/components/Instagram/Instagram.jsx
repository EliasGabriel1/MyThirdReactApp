import React from 'react';
import useStyles from './styles';

const Instagram  = () => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.container}>
        <div className={classes.instagram}>
            <img src="https://img.icons8.com/clouds/100/000000/instagram-new--v2.png"/>
            <h1>FOLLOW US @DolphinSystems</h1>
        </div>
        <div className={classes.InstaGrid}>
            <div className={classes.a}>
                <img width="100%" height="500" src="https://cdn.pixabay.com/photo/2017/03/12/13/41/colorful-2137080_960_720.jpg"/>
            </div>

            <div className={classes.b}>
                <img width="100%" height="250" src="https://cdn.pixabay.com/photo/2017/11/11/21/08/paint-2940513_960_720.jpg"/>
            </div>


            <div className={classes.c}>
            <img width="100%" height="250" src="https://cdn.pixabay.com/photo/2016/11/29/12/28/chalks-1869492_960_720.jpg"/>

            </div>

            <div className={classes.d}>
            <img width="100%" height="250" src="https://cdn.pixabay.com/photo/2016/01/19/14/54/office-supplies-1149055_960_720.jpg"/>

            </div>

            <div className={classes.e}>
            <img width="100%" height="250" src="https://cdn.pixabay.com/photo/2021/09/28/14/33/paint-brushes-6664648_960_720.jpg"/>

            </div>

            <div className={classes.f}>
            <img width="100%" height="125" src="https://cdn.pixabay.com/photo/2017/11/11/21/08/paint-2940513_960_720.jpg"/>

            </div>
        </div>
    </div>
    </>
  );
};

export default Instagram;