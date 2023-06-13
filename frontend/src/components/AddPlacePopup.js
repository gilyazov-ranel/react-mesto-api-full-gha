import PopupWithForm from './PopupWithForm';
import { useInput } from '../hooks/useInput'
import { useState, useRef, useEffect } from 'react';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const nameCard = useRef();
    const linkCard = useRef();
    const [errorMessageName, setErrorMessageName] = useState('');
    const [errorMessageLink, setErrorMessageAbout] = useState('');
    const name = useInput('', { isEmpty: true, minLength: 2 });
    const link = useInput('', { isEmpty: true, minLength: 0, isUrl: false });

    useEffect(() => {
        nameCard.current.value = '';
        linkCard.current.value = '';
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            name: nameCard.current.value,
            link: linkCard.current.value
        })
    }

    function handleChangeName(e) {
        name.onChange(e);
        setErrorMessageName(e.target.validationMessage)
    }

    function handleChangeLink(e) {
        link.onChange(e);
        setErrorMessageAbout(e.target.validationMessage)
    }

    return (
        <PopupWithForm
            name='mesto'
            title='Новое место'
            isOpen={isOpen}
            onClose={onClose}
            nameButton={"Создать"}
            onSubmit={handleSubmit}
            onDisabled={!name.inputValid || !link.inputValid}>

            <input
                onChange={handleChangeName}
                onFocus={name.onFocus}
                ref={nameCard}
                id="text-input"
                type="text"
                className="popup__input popup__input_text_mesto"
                defaultValue=""
                name="formMesto"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30"
            />

            {((name.isDirty && name.isEmpty) || (name.isDirty && name.minLengthError)) && <span className="text-input-error popup__input-error popup__input-error_type_active">{errorMessageName}</span>}

            <input onChange={handleChangeLink}
                onFocus={link.onFocus}
                ref={linkCard}
                id="link-input"
                type="url"
                className="popup__input popup__input_text_link"
                defaultValue=""
                name="formLink"
                placeholder="Ссылка на картинку"
                required />
            {((link.isDirty && link.isEmpty) || (link.isDirty && link.minLengthError) || (link.isDirty && link.urlError)) && <span className="link-input-error popup__input-error popup__input-error_type_active">{errorMessageLink}</span>}

        </PopupWithForm>
    )

}