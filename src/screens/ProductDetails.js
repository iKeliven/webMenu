import React from 'react'
import SectionTitle from '../components/SectionTitle.js'
import ModalTitle from '../components/ModalTitle.js'
import ProductDescription from '../components/ProductDescription.js'
import SectionSubTitle from '../components/SectionSubTitle.js'
import CloseModal from '../components/CloseModal.js'
import pizza from '../images/pizza.jpg'
import ButtonAdd from '../components/ButtonAdd.js'
import Mandatory from '../components/Mandatory.js'
import ButtonSum from '../components/ButtonSum.js'
import Checkbox from '../components/Checkbox.js'
import Radio from '../components/Radio.js'
import '../styles/styles.scss'
import {useEffect} from 'react';

export default function ProductDetails (){
    //scroll event
    useEffect(() => {
        const handleScroll = event => {
          console.log('window.scrollY', window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <modal id="ProductDetails" className="modal modal--product bRadius">
            <div className="modal--product--img">
                <img className="bRadiusImg" src={pizza}/>
            </div>
            <section className="modal--product--contain">
                <CloseModal />
                <article onScroll={useEffect}>
                    <header className='web-menu--body--column bbottom'>
                        <SectionTitle />
                        <ProductDescription />
                    </header>
                    <ModalTitle />
                    <div className='web-menu--body--space-between sub-title'>
                        <SectionSubTitle />
                        <Mandatory />
                    </div>
                    <div className='modal--product--content web-menu--body--column'>
                        <Checkbox />
                        <Checkbox />
                    </div>
                    <ModalTitle />
                    <div className='web-menu--body--space-between sub-title'>
                        <SectionSubTitle />
                        <Mandatory />
                    </div>
                    <div className='modal--product--content web-menu--body--column'>
                        <Radio />
                        <Radio />
                    </div>
                </article>
                <footer className='web-menu--body--space-between'>
                    <ButtonSum />
                    <ButtonAdd />
                </footer>
            </section>
        </modal>
    )
}