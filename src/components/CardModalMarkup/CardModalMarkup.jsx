import { LiWrapper } from './CardModalMarkup.styled';
import { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FormBook } from '../FormBook/FormBook';

export const CardModalMarkup = ({ cardData, onClose }) => {
  const { id, avatar_url, name, surname } = cardData;

  const [defaultAvatar, setDefaultAvatar] = useState(null);

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
    <LiWrapper key={id} className="item">
      <button type="button" className="buttonIcon" onClick={onClose}>
        <IoCloseOutline size="32" />
      </button>
      <h1 className="titleBook">Book trial lesson</h1>
      <p className="textBook">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className="containerAvatar">
        <img
          className="avatarUrl"
          src={avatar_url || defaultAvatar}
          alt="avatar"
          style={{ cursor: 'pointer' }}
        />
        <div className="containerName">
          <p className="textYour">Your teacher</p>
          <p className="textName">
            {name} {surname}
          </p>
        </div>
      </div>
      <h2 className="titleGoal">
        What is your main reason for learning English?
      </h2>
      <FormBook />
    </LiWrapper>
  );
};
