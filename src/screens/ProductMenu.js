import React from 'react'
import SectionTitle from '../components/SectionTitle.js'
import MenuItem from '../components/MenuItem.js'
import Filter from '../components/Filter.js'
import ProductDetails from './ProductDetails.js'
import '../styles/styles.scss'


export default function ProductMenu(){
    return(
        <section>
            <header className="menu--header web-menu--body--space-between">
                <SectionTitle />
                <Filter />
            </header>
            <div className="product-menu">
            <a href="#ProductDetails"> <MenuItem /></a>
                    <ProductDetails />
                <a href="#ProductDetails"> <MenuItem /></a>
                    <ProductDetails />
                <a href="#ProductDetails"> <MenuItem /></a>
                    <ProductDetails />
                    <a href="#ProductDetails"> <MenuItem /></a>
                    <ProductDetails />
                <a href="#ProductDetails"> <MenuItem /></a>
                    <ProductDetails />
                <a href="#ProductDetails"> <MenuItem /></a>
                    <ProductDetails />
            </div>
            {/* End section */}
        </section>
        
    )
}