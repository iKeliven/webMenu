import React from 'react'
import { FaFilter } from 'react-icons/fa';
import '../styles/styles.scss'

export default function Filter(){
    return(
        <component className='web-menu--body--space-between filter'>
            <FaFilter size={10}/>
            <small> Filtrar</small>
        </component>
    )
}