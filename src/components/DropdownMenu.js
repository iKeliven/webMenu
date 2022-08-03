import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import '../styles/styles.scss'

export default function DropdownMenu(){
    return(
        <component className="dropdown-menu">
            <a href="#">CATEGORIAS <FaChevronDown size={16}/></a>
            <ul className="dropdown">
                <li><a href="#">Pizzas</a></li>
                <li><a href="#">Calzones</a></li>
                <li><a href="#">Bebidas</a></li>
            </ul>
        </component>
    )
}