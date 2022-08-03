import React from 'react'
import '../styles/styles.scss'
import {FaMapMarkerAlt} from 'react-icons/fa'

export default function ButtonAddress() {
    return(
        <component className="button-address web-menu--body--space-between">
            <FaMapMarkerAlt size={20}/>
            <small className="web-menu--body--column">
                <strong>Entregar em</strong>
                <p>Serv. Maria Joaquina, 103</p>
            </small>
            <small className="web-menu--body--column">
                <strong>45 min</strong>
                <strong>R$ 5,00</strong>
            </small>
        </component>
    )
}