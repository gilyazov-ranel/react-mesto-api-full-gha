import { useState } from 'react';
import Header from './Header';


export default function Login({ onLogin, onSignOut }) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(formValue)
    }

    return (
        <>
            <Header
                pageTitle='Регистрация'
                onSignOut={onSignOut}></Header>

            <div className='data'>
                <h1 className='data__title'>
                    Вход
                </h1>

                <form onSubmit={handleSubmit} className='data__form'>
                    <input
                        onChange={handleChange}
                        id="email" name="email" type="email"
                        className='data__input'
                        placeholder="Email">
                    </input>

                    <input
                        onChange={handleChange}
                        id="password" name="password" type="password"
                        className='data__input'
                        placeholder="Пароль">
                    </input>

                    <button type='submit' onSubmit={handleSubmit} className='data__button'>Войти</button>
                </form>

            </div>

        </>
    )
}