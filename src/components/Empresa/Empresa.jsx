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
        <div>
          <h1>Empresa</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur in magnam excepturi, repellendus laudantium expedita repudiandae incidunt laborum quos, voluptatem ea quia fugit numquam. Dolorum voluptate accusamus numquam impedit ducimus.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam atque expedita, laborum eveniet ullam commodi quam voluptatem odit, omnis illo eligendi deleniti exercitationem! Expedita repellat saepe molestias. Dolor, eius amet!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, sunt harum nihil numquam porro ad optio voluptates dolores quasi rem exercitationem impedit id blanditiis a provident fugiat similique eveniet ab?</p>
          <div className={classes.df}>
            <div>
              <div>
                <h1>Missão</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quia incidunt libero fuga, molestiae quos dolores minima, nostrum eaque reiciendis blanditiis saepe asperiores, laudantium sed quasi id officia? Quas, ipsam.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dicta corrupti veritatis alias consectetur facilis nisi obcaecati sunt maxime, laborum, tenetur, consequatur rerum dolor quia distinctio fuga. Nulla, inventore esse?</p>
              </div>
            </div>

            <div>
              <div>
                <h1>Visão</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quia incidunt libero fuga, molestiae quos dolores minima, nostrum eaque reiciendis blanditiis saepe asperiores, laudantium sed quasi id officia? Quas, ipsam.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dicta corrupti veritatis alias consectetur facilis nisi obcaecati sunt maxime, laborum, tenetur, consequatur rerum dolor quia distinctio fuga. Nulla, inventore esse?</p>
              </div>
            </div>
          
            <div>
              <div>
                <h1>Valores</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quia incidunt libero fuga, molestiae quos dolores minima, nostrum eaque reiciendis blanditiis saepe asperiores, laudantium sed quasi id officia? Quas, ipsam.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dicta corrupti veritatis alias consectetur facilis nisi obcaecati sunt maxime, laborum, tenetur, consequatur rerum dolor quia distinctio fuga. Nulla, inventore esse?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default Copyright;