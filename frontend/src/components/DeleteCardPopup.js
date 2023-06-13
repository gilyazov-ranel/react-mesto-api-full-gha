import PopupWithForm from './PopupWithForm';
export default function DeleteCardPopup({ isOpen, onClose, onCardDelete, card }) {

    function handleSubmit(e) {
        e.preventDefault()
        onCardDelete(card)
    }

    return (
        <PopupWithForm name='delete'
            title='Вы уверены?'
            isOpen={isOpen}
            nameButton={"Да"}
            onClose={onClose}
            onSubmit={handleSubmit} />
    )
}