import React from 'react';

import './form-input.styles.scss';


const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input'
               name={otherProps.name}
               type={otherProps.type}
               onChange={handleChange}
               {...otherProps}/>
        {label ? (
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
                   htmlFor=''
            >
                {label}
            </label>
            ) : null
        }
    </div>
)

export default FormInput;