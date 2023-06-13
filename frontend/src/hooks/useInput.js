import { useState } from 'react';
import { useValidation } from '../hooks/useValidation';

export function useInput(initalValue, validations) {
    const [value, setValue] = useState(initalValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations)

    function onChange(e) {
        setValue(e.target.value)
    }

    function onFocus() {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onFocus,
        isDirty,
        ...valid
    }

}