import React from 'react'
import SectionTitle from '../components/SectionTitle.js'
import MenuItem from '../components/MenuItem.js'
import ProductDetails from './ProductDetails.js'
import '../styles/styles.scss'

export default function TopHated(){
    return(
        <section>
            <header className='menu--header'>
                <SectionTitle />
            </header>
            <div className="top-hated">
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