import {ChangeEventHandler, FC, memo} from 'react';
import {Input} from "../../../../ui/input/input";

interface IdInstanceInputProps {
    className: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string;
}

export const IdInstanceInput:FC<IdInstanceInputProps> = memo(({className, value, onChange}) => {
    return (
        <Input extraClass={className} value={value} onChange={onChange} name={'idInstance'} placeholder={'Введите ID Instance'} required/>
    );
});
