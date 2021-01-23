import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productsActions'
import { useSelector, useDispatch } from 'react-redux'
import '../index.css'


function CategoriesList ({ productData, fetchProducts }) {
    function Capitalize(str){
        return str.split(' ').map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(' ');
        }
    
    useEffect(() => {
        fetchProducts()
    }, [])
    // const products = useSelector(state => state.products)
    // const dispatch = useDispatch()    
    // return <h1>Test</h1>
    return productData.loading ? (
        <h2>Loading Text</h2>
    ) : productData.error ? (
        <h2>{productData.error}</h2>
    ) : (
        <div>
            <h2>Product List</h2>
            <div>
                {productData && 
                    productData.products && 
                    productData.products.map(product => (
                        <div>
                            <img className='image' src={product.image}/>
                            <p key={product.id}>{Capitalize(product.category)}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        productData: state.product
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList)
// export default CategoriesList