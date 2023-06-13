
export default function InfoTooltip({ title, imageUnion, isOpen, onClose }) {

    return (
        <div className={`popup ` + (isOpen && 'popup_opened')} onClick={onClose}>
            <div className="popup__tooltip" onClick={e => e.stopPropagation()}>

                <button className="popup__close popup__close_form"
                    type="button"
                    aria-label="Закрыть всплывающее окно"
                    onClick={onClose}>
                </button>

                <img src={imageUnion} className="popup__union" alt={title} />

                <h2 className="popup__info">
                    {title}
                </h2>
            </div>
        </div>
    )
}