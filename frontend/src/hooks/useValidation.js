import { useEffect, useState } from 'react';

export function useValidation(value, validations) {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [urlError, setUrlError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const i in validations) {
            switch (i) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'minLength':
                    value.length < validations[i] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isUrl':
                    const url = /(?:https?):(\w+:?\w*)?(\S+)(:\d+)?(([\w#!:.?+=&%!]))?/;
                    url.test(String(value).toLowerCase()) ? setUrlError(false) : setUrlError(true)
                    break;
                // no default
            }
        }
    }, [value, validations])

    useEffect(() => {
        if (isEmpty || minLengthError || urlError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLengthError, urlError]);

    return {
        isEmpty,
        minLengthError,
        urlError,
        inputValid,
        setInputValid
    }
}