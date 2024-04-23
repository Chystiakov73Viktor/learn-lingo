// import { NavLink } from 'react-router-dom';
import { DivWrapper } from './AuthNav.styled';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import Signup from 'components/Signup/Signup';
import Signin from 'components/Signin/Signin';

const AuthNav = () => {
  const [isModalOpenSignup, setIsModalOpenSignup] = useState(false);
  const [isModalOpenSignin, setIsModalOpenSignin] = useState(false);
  const [isActiveSignin, setIsActiveSignin] = useState(false);

  const openModal = modalType => {
    if (modalType === 'signup') {
      setIsModalOpenSignup(true);
    } else if (modalType === 'signin') {
      setIsModalOpenSignin(true);
      setIsActiveSignin(true);
    }
  };

  const closeModal = modalType => {
    if (modalType === 'signup') {
      setIsModalOpenSignup(false);
    } else if (modalType === 'signin') {
      setIsModalOpenSignin(false);
      setIsActiveSignin(false);
    }
  };

  return (
    <DivWrapper>
      <button
        className={`buttonLog ${isActiveSignin ? 'activeLog' : ''}`}
        onClick={() => openModal('signin')}
      >
        Log in
      </button>
      <button
        className="buttonRegistration"
        onClick={() => openModal('signup')}
      >
        Registration
      </button>
      {isModalOpenSignup && (
        <Modal
          onClose={() => closeModal('signup')}
          backdropClassName="backdropSignup"
          contentClassName="contentSignup"
        >
          <Signup onClose={() => closeModal('signup')} />
        </Modal>
      )}
      {isModalOpenSignin && (
        <Modal
          onClose={() => closeModal('signin')}
          backdropClassName="backdropSignin"
          contentClassName="contentSignin"
        >
          <Signin onClose={() => closeModal('signin')} />
        </Modal>
      )}
    </DivWrapper>
  );
};

export default AuthNav;
