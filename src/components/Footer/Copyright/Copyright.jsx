import React from 'react';
import useStyles from './styles';

const Copyright  = () => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.followus}>
        <div className={classes.sociais}>
          <a href="#"><img src="https://img.icons8.com/cotton/30/000000/facebook.png"/></a>
          <a href="#"><img src="https://img.icons8.com/cotton/30/000000/instagram-new.png"/></a>
          <a href="#"><img src="https://img.icons8.com/cotton/30/000000/twitter.png"/></a>
          <a href="#"><img src="https://img.icons8.com/cotton/30/000000/youtube.png"/></a>
          <a href="#"><img src="https://img.icons8.com/cotton/28/000000/whatsapp--v3.png"/></a>
        </div>
    </div>
      <div className={classes.copy}>
          <p>Copyright © 2021-nomedaempresa.com.br. Todos os direitos reservados. Os preços, promoções, condições de pagamento, frete e produtos  são válidos exclusivamente para compras realizadas via internet. Fotos meramente ilustrativas. Nome da Empresa Ltda. Me CNPJ: 11.111.111/0001-11 - Endereço: Rua da Rua, 00 - São Paulo - SP </p>
      </div>
      <div className={classes.copy}>
        <small>
          <img src="https://img.icons8.com/ios-filled/20/000000/github-2.png"/>
          GITHUB:
          <a href="https://github.com/EliasGabriel1" className={classes.href}> Elias Gabriel - Front-End Develloper</a>
        </small>
      </div>
    </>
  );
};

export default Copyright;