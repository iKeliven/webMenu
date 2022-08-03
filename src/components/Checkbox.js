import React from 'react'

export default function Checkbox(){
    return (
        <a className="web-menu--body--space-between product-input bbottom">
            <label for = "flavors">Sabor aqui</ label>
            <input type = "checkbox" id = "flavors" name = "selectFlavors" value = "flavors" />
        </a>
    )
}