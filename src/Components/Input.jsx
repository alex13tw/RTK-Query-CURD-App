// Input.js
import React from 'react';

const Input = ({ type, onChange, name, id,value }) => {
    return (
        <div>
            <input type={type} value={value} onChange={onChange} className="form-control" name={name} id={id}/>
        </div>
    );
};

export default Input;
