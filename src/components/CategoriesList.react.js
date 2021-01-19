import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productsActions'
import { useSelector, useDispatch } from 'react-redux'


function CategoriesList ({ productData, fetchProducts }) {
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
                    productData.products.map(product => <p key={product.id}>{product.category}</p>)
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