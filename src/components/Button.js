import React from "react";
import '../styles/styles.scss'

export default function Button(){
    return(
        <component className="button ">
            <button className="btn-back bRadius">
                Voltar
            </button>
            <button className="btn-next bRadius">
                Enviar
            </button>
        </component>
    )
}