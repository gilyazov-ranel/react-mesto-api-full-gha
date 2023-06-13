import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main({ onEditAvatar, onEditProfile, onAddPlace, onSelectedCard, cards, onCardLike, onCardDelete, onOpenDeleteCard, onSelectedCardToDelete }) {

    const currenUser = useContext(CurrentUserContext);

    return (

        <main className="main">
            <section className="profile">

                <div className="profile__shell"
                    onClick={onEditAvatar}>

                    <img className="profile__avatar"
                        src={currenUser.avatar}
                        alt="Твоя аватарка" />
                </div>

                <div className="profile__info">
                    <h1 className="profile__title">
                        {currenUser.name}
                    </h1>

                    <button className="profile__info-button"
                        type="button"
                        aria-label="Редактировать профиль"
                        onClick={onEditProfile} />

                    <p className="profile__subtitle">
                        {currenUser.about}
                    </p>
                </div>

                <button className="profile__button"
                    type="button"
                    aria-label="Кнопка"
                    onClick={onAddPlace}></button>

            </section>

            <section className="cards">

                {cards.map((card) => {
                    return (
                        <Card card={card}
                            onCardClick={onSelectedCard}
                            key={card._id}
                            onCardLike={onCardLike}
                            onCardDelete={onCardDelete}
                            onOpenDeleteCard={onOpenDeleteCard}
                            onSelectedCardToDelete={onSelectedCardToDelete} />

                    )
                })}
            </section>
        </main>

    );
}

export default Main;