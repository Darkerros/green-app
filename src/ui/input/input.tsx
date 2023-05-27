import {DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import styles from './input.module.scss'
import clsx from "clsx";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    extraClass?: string;
}

export const Input:FC<InputProps> = ({extraClass, ...otherInputProps}) => {
    const styleClassName = clsx({
        [styles.input]: true,
        [String(extraClass)]: !!extraClass
    })

    return (
        <input type="text" className={styleClassName} {...otherInputProps} />
    );
};
