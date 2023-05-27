import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import styles from './button.module.scss'
import clsx from "clsx";

interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'>{
    extraClass?: string;
}

export const Button:FC<ButtonProps> = ({extraClass ,children, ...otherButtonProps}) => {
    const buttonClassName = clsx({
        [styles.button]: true,
        [String(extraClass)]: !!extraClass,
    })

    return (
        <button className={buttonClassName} {...otherButtonProps}>{children}</button>
    );
};
