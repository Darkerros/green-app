import {FC, memo} from 'react';
import {Button} from "../../../../ui/Button/button";

interface SubmitButtonProps {
    className: string;
}

export const SubmitButton:FC<SubmitButtonProps> = memo(({className}) => {
    return (
        <Button extraClass={className} type={"submit"}>Подтвердить</Button>
    );
});
