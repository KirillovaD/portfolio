import React from 'react';
import s from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.containerMain}`}>
                <div className={s.introText}>
                    <span>Hi There</span>
                    <h1>Daria Kirillova</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.foto}>Foto</div>
            </div>


        </div>
    );
}

export default Main;
