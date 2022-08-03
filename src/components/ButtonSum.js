import React from 'react'
import '../styles/styles.scss'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'

export default function ButtonSum(){
    return(
        <component className="button-sum bRadius web-menu--body--space-between">
            <button href="#sum" >
                <FaPlus size={12} />
            </button>
            <h3 id="sum">0</h3>
            <button href="#reduce">
                <FaMinus size={12} />
            </button>
        </component>

    )
}