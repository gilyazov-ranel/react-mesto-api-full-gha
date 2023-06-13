import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Register({ onRegister, onSignOut }) {
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
        onRegister(formValue)
    }

    return (
        <>
            <Header
                pageTitle='Войти'
                onSignOut={onSignOut}></Header>

            <div className='data'>
                <h1 className='data__title'>
                    Регистрация
                </h1>

                <form onSubmit={handleSubmit} className='data__form'>
                    <input
                        onChange={handleChange}
                        id="email" name="email" type="email"
                        className='data__input'
                        value={formValue.email}
                        placeholder="Email">
                    </input>

                    <input
                        onChange={handleChange}
                        id="password" name="password" type="password"
                        className='data__input'
                        value={formValue.password}
                        placeholder="Пароль">
                    </input>

                    <button type="submit" className='data__button' onSubmit={handleSubmit}>
                        Зарегистрироваться
                    </button>
                </form>

                <p className='data__text'>Уже зарегистрированы?
                    <Link to='/sign-in' className='data__link'> Войти</Link>
                </p>
            </div>


        </>
    )
}