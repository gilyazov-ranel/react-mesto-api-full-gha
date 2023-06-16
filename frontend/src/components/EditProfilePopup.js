import PopupWithForm from './PopupWithForm';
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useInput } from '../hooks/useInput'

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const currentUser = useContext(CurrentUserContext);
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessageName, setErrorMessageName] = useState('');
    const [errorMessageAbout, setErrorMessageAbout] = useState('');

    const nameUser = useInput('', { isEmpty: true, minLength: 2 });
    const about = useInput('', { isEmpty: true, minLength: 10 });

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    useEffect(() => {

        nameUser.setInputValid(true);
        about.setInputValid(true);
        setErrorMessageName('');
        setErrorMessageAbout('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onClose])


    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name: name,
            about: description,
        });
    }

    function handleChangeName(e) {
        setName(e.target.value);
        nameUser.onChange(e);
        setErrorMessageName(e.target.validationMessage);

    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
        about.onChange(e);
        setErrorMessageAbout(e.target.validationMessage);
    }

    return (
        <PopupWithForm
            name='name'
            title='Редактировать профиль'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            onDisabled={!nameUser.inputValid || !about.inputValid}>

            <input
                onFocus={e => nameUser.onFocus(e)}
                id="name-input"
                type="text"
                className="popup__input popup__input_text_name"
                value={name ?? ""}
                name="name"
                placeholder="Имя"
                required
                minLength="2"
                maxLength="40"
                onChange={handleChangeName} />
            {((nameUser.isDirty && nameUser.isEmpty) || (nameUser.isDirty && nameUser.minLengthError)) && <span className="name-input-error popup__input-error popup__input-error_type_active">
                {errorMessageName}
            </span>}
            <input
                onFocus={e => about.onFocus(e)}
                id="job-input"
                type="text"
                className="popup__input popup__input_text_job"
                value={description ?? ""}
                name="about"
                placeholder="О себе"
                required
                minLength="10"
                maxLength="200"
                onChange={handleChangeDescription} />
            {((about.isDirty && about.isEmpty) || (about.isDirty && about.minLengthError)) && <span className="job-input-error popup__input-error popup__input-error_type_active">
                {errorMessageAbout}
            </span>}

        </PopupWithForm>
    )
}