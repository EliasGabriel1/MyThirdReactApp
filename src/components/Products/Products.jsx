import React from 'react';
import Grid from '@material-ui/core/Grid';
import Minibanner from '../Minibanner/Minibanner';
import Product from './Product/Product';
import useStyles from './styles';
import Footer from '../Footer/Footer'
import Faixa from '../Faixa/Faixa';
import Instagram from '../Instagram/Instagram';
import Banner from '../Banner/Banner'

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <>
    <div className={classes.pageProduct}>
       <main className={classes.content}>
        <Banner/>
        <Faixa/>
        <Minibanner/>
        <div className={classes.toolbar} />
        <div class={classes.center}>
          <img width="38" height="38" src="https://img.icons8.com/ios/50/000000/product.png"/>
          <h1> Produtos Destaques</h1>
        </div>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
      <Instagram/>
      <Footer/>
    </div>
    </>
  );
};

export default Products;

