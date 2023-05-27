import React, {FC, memo} from 'react';

interface TitleProps {
    className: string;
}

export const Title:FC<TitleProps> = memo(({className}) => {
    return (
        <p className={className}>Форма начальной настройки</p>
    );
});
