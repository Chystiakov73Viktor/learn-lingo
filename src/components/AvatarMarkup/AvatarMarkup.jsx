import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DivWrapper } from './AvatarMarkup.styled';
import { selectUser, selectUserAvatar } from '../../redux/users/selects';
import { Modal } from 'components/Modal/Modal';
import AvatarModalMarkup from '../AvatarModalMarkup/AvatarModalMarkup';

export const AvatarMarkup = () => {
  const name = useSelector(selectUser);
  const avatar = useSelector(selectUserAvatar);
  const [defaultAvatar, setDefaultAvatar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAvatarModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const generateDefaultAvatar = name => {
      if (name && name.length >= 2) {
        const initials = name
          .split(' ')
          .map(part => part.charAt(0))
          .join('')
          .toUpperCase();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 100;
        canvas.height = 100;
        ctx.fillStyle = '#3470ff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(initials, canvas.width / 2, canvas.height / 2);
        return canvas.toDataURL();
      }
      return null;
    };

    const defaultAvatarUrl = generateDefaultAvatar(name);
    setDefaultAvatar(defaultAvatarUrl);
  }, [name]);

  return (
    <DivWrapper>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          backdropClassName="backdropAvatar"
          contentClassName="contentAvatar"
        >
          <AvatarModalMarkup onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
      <img
        className="imgAvatar"
        src={avatar || defaultAvatar}
        alt="avatar"
        onClick={handleAvatarModal}
        style={{ cursor: 'pointer' }}
      />
    </DivWrapper>
  );
};
