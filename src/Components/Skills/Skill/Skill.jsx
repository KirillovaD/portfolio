import React from 'react';
import s from "./Skill.module.css";

function Skill() {
    const skills = [
        {
            icon: 'img',
            skill: 'HTML/CSS',
            text: 'More about'
        },
        {
            icon: 'img',
            skill: 'JS',
            text: 'More about'
        },
        {
            icon: 'img',
            skill: 'Typescript',
            text: 'More about'
        }
    ]

    return (
        <>
            {skills.map((skill, index) => {
                return <div key={index} className={s.skill}>
                        <div className={s.icon}>{skill.icon}</div>
                        <h3>{skill.skill}</h3>
                        <p>{skill.text}</p>
                </div>
            })}
        </>

    );
}

export default Skill;
