import React from 'react';
import s from "./Skill.module.css";

function Skill() {
    const skills = [
        {
            skill: 'HTML/CSS',
            text: 'More about'
        },
        {
            skill: 'JS',
            text: 'More about'
        },
        {
            skill: 'Typescript',
            text: 'More about'
        }, {
            skill: 'React',
            text: 'More about'

        }, {
            skill: 'Redux',
            text: 'More about'
        }, {
            skill: 'Other',
            text: 'More about'
        }
    ]

    return (
        <>
            {skills.map((skill, index) => {
                return <div key={index} className={s.skill}>
                    <h3>{skill.skill}</h3>
                    <p>{skill.text}</p>
                </div>
            })}
        </>

    );
}

export default Skill;