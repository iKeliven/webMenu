import React from 'react'

export default function Radio(){
    return (
        <a className="web-menu--body--space-between product-input bbottom">
            <label for = "additional">Adicional aqui</ label>
            <input type = "radio" id = "additional" name = "selectAdditional" value = "additional" />
        </a>
    )
}