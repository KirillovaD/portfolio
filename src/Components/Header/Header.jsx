import React from 'react';
import s from './Headers.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Nav from "../Nav/Nav";

function Header() {
    return (
        <div className={s.header}>
            <div className={`${styleContainer.container} ${s.nav}`}>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;