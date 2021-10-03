import React from 'react';
import useStyles from './styles';

const Copyright  = () => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.main}>
        <div className={classes.container}>
          <div className={classes.iconhome}>
            <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/000000/home-page--v2.png"/>
            <h3> <a className={classes.href} href="/">Home</a></h3>
          </div>

          <div className={classes.containercontato}>
            <p> (99) 3999-9999</p>
            <p> (99) 99999-9999</p>
            <p>contato@dolphin.com.br</p>
          </div>

          <div className={classes.center}>
            <div className={classes.sociais}>
              <a href="#"><img src="https://img.icons8.com/cotton/30/000000/facebook.png"/></a>
              <a href="#"><img src="https://img.icons8.com/cotton/30/000000/instagram-new.png"/></a>
              <a href="#"><img src="https://img.icons8.com/cotton/30/000000/twitter.png"/></a>
              <a href="#"><img src="https://img.icons8.com/cotton/30/000000/youtube.png"/></a>
              <a href="#"><img src="https://img.icons8.com/cotton/28/000000/whatsapp--v3.png"/></a>
            </div>
          </div>
        </div>
    </main>
    </>
  );
};

export default Copyright;