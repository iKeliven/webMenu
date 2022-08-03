import React from 'react';
import '../styles/styles.scss'


export default function Navbar(){
    return(
        <nav className="navbar web-menu--body--space-around">
          <li><a href="../App.js">Início</a></li>
          <li><a href="">Promoções</a></li>
          <li><a href="">Pedido</a></li>
          <li><a href="">Entrar/Cadastrar</a></li>
        </nav>
    )
}