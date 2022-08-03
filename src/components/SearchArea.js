import React from "react";
import { FaSistrix } from 'react-icons/fa'
import '../styles/base.scss'

export default function SearchArea() {
    return(
        <component className="search-area web-menu--body--space-between">
            <input type="search" id="menu-search" name="search" placeholder="Pesquisar"/>
            <button type="submit">
                <FaSistrix size={15} />
            </button>
        </component>
    )
}