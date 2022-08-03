import React from 'react'
import SectionTitle from '../components/SectionTitle.js'
import OurEmporium from '../components/OurEmporium.js'
import { FaChevronDown } from 'react-icons/fa'

export default function Address(){
    return(
        <div className="modal modal--address">
            <section className='web-menu--body--column'>
                <SectionTitle />
                <p>
                    Onde você quer receber o seu pedido?
                </p>
                <button>
                    Usar minha localiação atual
                </button>
                <p>
                    ou
                </p>
                <input className="" type="search" id="search-cep" name="cep" placeholder="Insira seu CEP aqui"/>
                <p>
                    ou
                </p>
                <li className="">
                    <a href="#">Selecione uma cidade <FaChevronDown size={20} /></a>
                    <ul>
                        <li><a href="#">Florianópolis</a></li>
                        <li><a href="#">São José</a></li>
                        <li><a href="#">Palhoça</a></li>
                    </ul>
                </li>
                <li className="">
                    <a href="#">Selecione um bairro <FaChevronDown size={20}/></a>
                    <ul>
                        <li><a href="#">Bairro 1</a></li>
                        <li><a href="#">Bairro 2</a></li>
                        <li><a href="#">Bairro 3</a></li>
                    </ul>
                </li>
            </section>
            <section>
                <SectionTitle />
                <OurEmporium />
                <OurEmporium />
                <OurEmporium />
            </section>
        </div>
    )
}