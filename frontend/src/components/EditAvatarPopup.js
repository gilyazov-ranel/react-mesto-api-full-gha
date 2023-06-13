import PopupWithForm from './PopupWithForm';
import { useInput } from '../hooks/useInput'
import { useState, useRef, useEffect } from 'react';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const userAvatar = useRef();
    const [errorMessageAvatar, setErrorMessageAvatar] = useState('');
    const url = useInput('', { isEmpty: true, minLength: 0, isUrl: false });

    useEffect(() => {
        userAvatar.current.value = '';
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: userAvatar.current.value,
        });
    }

    function handleChangeLink(e) {
        url.onChange(e);
        setErrorMessageAvatar(e.target.validationMessage);
    }

    return (
        <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            onDisabled={!url.inputValid}>

            <input
                onChange={handleChangeLink}
                onFocus={url.onFocus}
                ref={userAvatar}
                id="link-avatar"
                type="url"
                className="popup__input popup__input_text_link"
                defaultValue=''
                name="avatar"
                placeholder="Ссылка на аватарку"
                required />
            {((url.isDirty && url.isEmpty) || (url.isDirty && url.minLengthError) || (url.isDirty && url.urlError)) && <span className="link-avatar-error popup__input-error popup__input-error_type_active">{errorMessageAvatar}</span>}

        </PopupWithForm>
    )
}