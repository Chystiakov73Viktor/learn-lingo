import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { WrapperDiv } from './PasswordInput.styled';

const PasswordInput = ({ name, value, onChange, onBlur, className }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <WrapperDiv>
      <input
        type={visible ? 'text' : 'password'}
        placeholder="Password"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
      />
      <div className="iconWrapper" onClick={toggleVisibility}>
        {visible ? (
          <FiEye style={{ color: '#121417' }} />
        ) : (
          <FiEyeOff style={{ color: '#121417' }} />
        )}
      </div>
    </WrapperDiv>
  );
};

export default PasswordInput;
