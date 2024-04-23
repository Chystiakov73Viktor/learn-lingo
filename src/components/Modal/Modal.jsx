import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({
  onClose,
  children,
  backdropClassName,
  contentClassName,
}) => {
  useEffect(() => {
    const hendleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', hendleKeyDown);
    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  }, [onClose]);

  const hendleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={hendleBackdropClick} className={backdropClassName}>
      <div className={`content ${contentClassName}`}>{children}</div>
    </Backdrop>,
    modalRoot
  );
};
