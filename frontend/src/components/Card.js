import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';

function Card({ onCardClick, card, onCardLike, onOpenDeleteCard, onSelectedCardToDelete }) {

    const currentUser = useContext(CurrentUserContext)
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `card__button ${isLiked && 'card__button_active'}`
    );

    function handleClick() {
        onCardClick(card);
    }
    function handleLikeClick() {
        onCardLike(card)
    }

    function handlePopupDeleteCard() {
        onSelectedCardToDelete(card)
        onOpenDeleteCard()
    }

    return (

        <article className="card">
            {isOwn && <button
                className="card__delete"
                type="button"
                aria-label="Удаление карточки"
                onClick={handlePopupDeleteCard}
            ></button>}

            <img className="card__image"
                alt="Картинка"
                src={card.link}
                onClick={handleClick} />

            <div className="card__group">

                <h2 className="card__title">
                    {card.name}
                </h2>
                <button className={cardLikeButtonClassName}
                    type="button"
                    aria-label="Лайк"
                    onClick={handleLikeClick}></button>

                <p className="card__counter">
                    {card.likes.length}
                </p>

            </div>
        </article>
    )

};

export default Card;