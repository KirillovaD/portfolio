import React from 'react';
import s from "./Work.module.css";

function Work() {
    const projects = [
        {
            projectImg:'',
            projectTitle: 'ToDo List',
            review: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
        },
        {
            projectImg: '',
            projectTitle: 'Social Network',
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },


    ]

    return (
        <>
            {projects.map((project, index) => {
                return <div key={index} className={s.project}>
                    <div className={s.containerWork}>
                        <div className={s.projectImg}>{project.projectImg}
                            <a href={'#'}>Смотреть</a>
                        </div>

                        <div className={s.containerText}>
                            <h3>{project.projectTitle}</h3>
                            <p className={s.review}>{project.review}</p>
                        </div>

                    </div>
                </div>
            })}
        </>

    );
}

export default Work;
