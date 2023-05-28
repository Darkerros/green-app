import {useRef} from 'react';
import {GreenApi} from "../api/green-api";

export const useGreenApi = () => {
    const apiRef = useRef(new GreenApi(localStorage.getItem('idInstance') || '',localStorage.getItem('apiTokenInstance') || ''))
    return apiRef.current
};
