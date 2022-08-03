import React from "react";
import logo from '../images/logo.jpg'

export default function OurEmporium() {
    return (
        <article className="web-menu--body--center">
            <div className="web-menu--body--center--attr-01--left">
                <img src={logo}/>
            </div>
            <div className="web-menu--body--center--attr-02--right">
                <p className="title">Restaurante Kobrasol</p>
                <span className="resume">Entrega - Retirada</span>
                <h2 className="price">Fechado - Abre as 19:00h</h2>
            </div>
        </article>
    )
}