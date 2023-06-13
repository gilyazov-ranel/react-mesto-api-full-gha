function ImagePopup({ onClose, card }) {

    return (

        <div className={'popup popup_opacity popup_image ' + (card.link && 'popup_opened')} onClick={onClose}>
            <div className='popup__container-image' onClick={e => e.stopPropagation()}>

                <button className='popup__close popup__close_image'
                    type='button'
                    aria-label='Закрыть всплывающее окно'
                    onClick={onClose}></button>

                <img alt={card?.name}
                    className='popup__open-image'
                    src={card?.link} />

                <h2 className='popup__image-title'>
                    {card?.name}
                </h2>

            </div>
        </div>

    )
}

export default ImagePopup;