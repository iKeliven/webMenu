import React from 'react'
import '../styles/styles.scss'

export default function ProductDescription(){
    return (
        <component className="product-description web-menu--body--column">
            <small>
                Pizza de 8 fatias. <br />
                Até 2 sabores. <br />
                Serve até 3 pessoas
            </small>
            <h2 className="web-menu--body--flex-end price">
                R$ 39,90
            </h2>
        </component>
    )
}