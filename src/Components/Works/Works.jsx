import React from 'react';
import s from './Works.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Work from "./Work/Work";


function Works() {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <h2>Мои работы</h2>
                <div className={s.works}>
                  <Work/>
                </div>
            </div>
        </div>
    );
}

export default Works;
