import React, { useState } from 'react';
import CategoriesList from './CategoriesList.react';
import { Provider } from 'react-redux'
import store from '../store'
// import Card  from './Card'
import { Card, Grid, CardContent, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { PRODUCT_INFO } from './ProductInfo'
import productsReducer from '../reducers/productsReducer';

const useStyles = makeStyles ({
  container: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px'
  }
})


const getCategoryCard = () => {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card>
        <CardContent>Testing</CardContent>  
      </Card>  
    </Grid>
  )
}

function App() {
  const classes = useStyles();
  const [productData, getProductData] = useState(PRODUCT_INFO)
  return (
    <div>
      {productData ? (
        <Grid container spacing={3} justify='center' className={classes.container}> 
          {getCategoryCard()}
          {getCategoryCard()}
          {getCategoryCard()}
          <Provider store={store}>
            <CategoriesList />
          </Provider>
        </Grid>
      ) : (
        <CircularProgress />
      )
      }
      
        {/* <Grid md={4}>
          <CardContent>
            <Card category='Men Clothing' image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'/>
          </CardContent>
        </Grid>
        <Grid md={4}>
          <CardContent>
            <Card category='Jewelery' image='https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'/>
          </CardContent>
        </Grid>
        <Grid md={4}>
          <CardContent>
            <Card category='Women Clothing'image='https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'/>
          </CardContent>
        </Grid> */}
        
    </div>
  )
}

export default App;
