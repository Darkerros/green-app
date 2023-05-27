import React, {ChangeEventHandler, FC, memo} from 'react';
import {Input} from "../../../../ui/input/input";

interface ApiTokenInstanceInputProps {
    className: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string;
}

export const ApiTokenInstanceInput:FC<ApiTokenInstanceInputProps> = memo(({className, value, onChange}) => {
    return (
        <Input extraClass={className} value={value} onChange={onChange} name={'apiTokenInstance'} placeholder={'Введите Api Token Instance'} required/>
    );
});
