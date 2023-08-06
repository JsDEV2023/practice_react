import React from 'react';
import { MyInput } from './UI/input/MyInput';
import { MySelect } from './UI/select/MySelect';

export const Filter = ({filter, setFilter}) => {
    return(
        <div>
            <MyInput 
                placeholder='Поиск...'
                value = {filter.query}
                onChange = {(e) => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.select}
                onChange = {e => setFilter({...filter, select: e})}
                defaultValue='Сортировка по'
                options={[
                {value: 'title', name: 'По загаловку'},
                {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    )
}