import React from 'react';
import logo from '../images/logo.jpg'
import { FaChevronRight } from 'react-icons/fa'
import Status from '../components/Status.js'
import ButtonAddress from '../components/ButtonAddress.js'
import '../styles/styles.scss'
import Address from './Address.js'

export default function Header(){
    return(
        <header className="web-menu--body--column">
            <div className="header--banner">
                <div className="header--details web-menu--body--space-between">
                    <Status />
                    <a href="#Address">
                        <ButtonAddress />
                    </a>
                   <Address /> 
                </div>
            </div>
            <div className="header--brand">
                <div className="header--left">
                    <img className="logo bRadius" src={logo}/>
                </div>
                <div className="header--right">
                    <h1 className="brand-name">
                        Restaurante XPTO
                    </h1>
                    <div className="brand-details">
                        <a className="about" href="#"><small>Sobre a loja <FaChevronRight size={10}/></small></a> 
                        <small className="min-order">Pedido mínimo <strong>R$ 15,00</strong></small>
                    </div>
                </div>
            </div>
        </header>
    )
}