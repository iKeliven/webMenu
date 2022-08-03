import React from 'react'
import SectionTitle from '../components/SectionTitle.js'

export default function Login(){
    return(
        <modal>
            <main className="login-area">
                <SectionTitle />
                <input className="login-area--attr01" type="text" id="user-email" name="user-email" placeholder="E-mail"/>
                <input className="login-area--attr02" type="password" id="user-password" name="user-password" placeholder="Senha"/>
            </main>
        </modal>
    )
}