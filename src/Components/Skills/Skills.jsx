import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2>Мои скиллы</h2>
                <div className={s.skills}>
                  <Skill/>
                </div>
            </div>

        </div>
    );
}

export default Skills;