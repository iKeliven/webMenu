import React from 'react'
import SectionTitle from '../components/SectionTitle.js'

export default function Sign(){
    return(
        <modal>
            <main className="web-menu--body--center">
                <SectionTitle />
                <input className="web-menu--body--center--attr-01" type="text" id="user-name" name="user-name" placeholder="Nome Completo"/>
                <input className="web-menu--body--center--attr-01" type="text" id="user-phone" name="user-phone" placeholder="Telefone"/>
                <input className="web-menu--body--center--attr-01" type="text" id="user-email" name="user-email" placeholder="E-mail"/>
                <input className="web-menu--body--center--attr-02" type="password" id="user-password" name="user-password" placeholder="Senha"/>
                <input className="web-menu--body--center--attr-02" type="password" id="user-password" name="user-password" placeholder="Confirmar Senha"/>
            </main>
        </modal>
    )
}