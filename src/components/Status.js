import React from "react";
import '../styles/styles.scss'

export default function Status(){
    return(
        <component className="status web-menu--body--space-around" >
            <small id="status">
                Aberto - Fecha às
            </small>
            <small id="openTime">
                15:00
            </small>
            <small>
                hs
            </small>
        </component>
    )
}