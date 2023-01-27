import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import { Controlled as EditorControlled } from "react-codemirror2";

/**
* @author
* @function Editor
**/

export const Editor = (props) => {
    const { language, heading, value, onChange } = props
    const [grow, setGrow] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value)
    }
    return (
        <div className={`editors ${grow ? '' : "shrink"}`}>
            <div className='title'>
                <span>{heading}</span>
                <button
                    type='button'
                    className='grow-btn'
                    onClick={() => setGrow(v => !v)}>
                    <FontAwesomeIcon icon={grow ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <EditorControlled
                onBeforeChange={handleChange}
                value={value}
                className="edior-All"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </div>
    )
}
