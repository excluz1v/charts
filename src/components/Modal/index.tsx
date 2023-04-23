import { useRef } from 'react'
import useOutsideClick from "../../utils";

import styles from './Modal.module.css'

export const Modal = ({ children, closeHandler }) => {
    const modalRef = useRef(null)
    useOutsideClick(modalRef, closeHandler)

    return (
        <section className={styles.Modal__container}>
        <div className={styles.Modal} ref={modalRef}>
        {children}
        </div>
        </section>
)
}
