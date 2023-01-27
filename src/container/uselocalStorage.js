import React, { useEffect, useState } from 'react'

/**
* @author
* @function useLocalStorage
**/
const commonKey = "online-code-editor"
export default function useLocalStorage(key, initialValue) {
    const usedKey = commonKey + key;

    const [value, setValue] = useState(() => {
        const existingValue = localStorage.getItem(usedKey);
        // console.log(existingValue);

        if (existingValue != null) return JSON.parse(existingValue);
        if (typeof initialValue === 'function') {
            return initialValue();
        } else {
            return initialValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(usedKey, JSON.stringify(value))
    }, [usedKey, value])

    // console.log(value)
    return [value, setValue]
}