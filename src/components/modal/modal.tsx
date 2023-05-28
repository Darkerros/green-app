import styles from './modal.module.scss';
import {createPortal} from "react-dom";
import {FC, ReactNode, useCallback, useEffect, useState} from "react";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

const modalContainer = document.querySelector('#modal') as Element

export const Modal:FC<ModalProps> = ({children, onClose}) => {
    const [modalState, setModalState] = useState(false)

    useEffect(() => {
        setModalState(true)
    },[])

    const closeModal = useCallback(() => {
        setModalState(false)
    },[])

    const handleClose = () => {
        closeModal()
        setTimeout(() => onClose(),350)
    }

    return createPortal((
        <div className={modalState ? `${styles.modalContainer} ${styles.modalContainer_status_active}` : styles.modalContainer}>
            <div className={styles.modalContainer__overlay} onClick={handleClose}/>
            <div className={styles.modalContainer__modal}>
                {children}
            </div>
        </div>
    ),modalContainer);
};

