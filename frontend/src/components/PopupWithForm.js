function PopupWithForm({ name, isOpen, title, nameButton, onClose, children, onSubmit, onDisabled }) {

    return (
        <>
            <div className={`popup popup__${name} ` + (isOpen && 'popup_opened')} onClick={onClose}>
                <div className="popup__container" onClick={e => e.stopPropagation()}>

                    <button className="popup__close popup__close_form"
                        type="button"
                        aria-label="Закрыть всплывающее окно"
                        onClick={onClose}></button>

                    <h2 className="popup__title">
                        {title}
                    </h2>

                    <form className="popup__form" name="form" noValidate onSubmit={onSubmit} >
                        {children}
                        <button type="submit"
                            className={"popup__button " + (onDisabled && 'popup__button_inactive')}
                            name="buttonForm"
                            onSubmit={onSubmit}
                            disabled={onDisabled}>
                            {nameButton || 'Сохранить'}
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}
export default PopupWithForm;