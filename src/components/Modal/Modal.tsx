import React, { PropsWithChildren, useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

type ModalProps = PropsWithChildren & {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      dialog?.showModal?.();
    } else {
      dialog?.close?.();
    }
  }, [isOpen]);

  return (
    <dialog className={styles.dialog} ref={dialogRef} onCancel={onClose}>
      {children}

      <button className={styles.close} onClick={() => onClose()}>
        X
      </button>
    </dialog>
  );
};

export default Modal;
