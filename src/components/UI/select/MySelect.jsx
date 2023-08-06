import React from 'react';

export const MySelect = ({defaultValue, options, onChange, value}) => {
    return(
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option disabled value="defaultValue">{defaultValue}</option>
            {options.map(item => {
                return <option value={item.value}>{item.name}</option>
            })}
        </select>
    )
}