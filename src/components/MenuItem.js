import React from 'react'
import pizza from '../images/pizza.jpg'
import '../styles/styles.scss'

export default function MenuItem(){
    return(
        <component className="menu-item bRadius">
            <div className="menu-item--img">
                <img className="bRadiusImg" src={pizza}/>
            </div>
            <section className="menu-item--details web-menu--body--column--space-around">
                <article>
                    <h2 className="title">Pizza grande</h2>
                    <small>
                        Pizza de 8 fatias.
                        Até 2 sabores.
                        Serve até 3 pessoas
                    </small>
                </article>
                <h3 className="price">R$ 39,90</h3>
            </section>
        </component>
    )
}