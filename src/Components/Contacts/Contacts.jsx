import React from 'react';
import s from './Contacts.module.css'
import styleContainer from '../../common/styles/Container.module.css'



function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2>Контакты</h2>
                <form className={s.contactForm}>
                    <input type={'text'}/>
                    <input type={'text'}/>
                    <textarea/>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
