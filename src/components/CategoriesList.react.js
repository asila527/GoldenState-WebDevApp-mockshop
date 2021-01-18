import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productsActions'

function CategoriesList ({ productData, fetchProducts }) {
    useEffect(() => {
        fetchProducts()
    }, [])
    
    return <h1>Test</h1>
    // return productData.loading ? (
    //     <h2>Loading Text</h2>
    // ) : productData.error ? (
    //     <h2>{productData.error}</h2>
    // ) : (
    //     <div>
    //         <h2>Product List</h2>
    //         <div>
    //             {productData && 
    //                 productData.products && 
    //                 productData.products.map(product => <p key={product.id}>{product.category}</p>)
    //             }
    //         </div>
    //     </div>
    // )
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