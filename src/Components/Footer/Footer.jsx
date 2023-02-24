import React from 'react';
import s from './Footer.module.css'
import styleContainer from '../../common/styles/Container.module.css'


function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <p>Дарья Кириллова</p>
                <div className={s.footerImg}>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>

            </div>
        </div>
    )
        ;
}

export default Footer;
