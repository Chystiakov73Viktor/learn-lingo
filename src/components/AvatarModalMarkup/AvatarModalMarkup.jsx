import { DivWrapper } from './AvatarModalMarkup.styled';
import { updateProfileThunk } from '../../redux/users/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Notify } from 'notiflix';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { selectUser } from '../../redux/users/selects';

const AvatarModalMarkup = ({ onClose }) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  const [inputName, setInputName] = useState(userName || '');
  const [newAvatar, setNewAvatar] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    const form = e.target;
    formData.append('name', inputName);
    formData.append('avatarURL', form.elements.avatar.files[0]);
    let newAvatarURL = newAvatar;

    if (form.elements.avatar.files[0]) {
      const storage = getStorage();
      const avatarRef = ref(storage, `avatars/${selectedFileName}`);
      await uploadBytes(avatarRef, form.elements.avatar.files[0]);
      const avatarURL = await getDownloadURL(avatarRef);
      newAvatarURL = avatarURL;
    }

    const { error, payload } = await dispatch(
      updateProfileThunk({ displayName: inputName, photoURL: newAvatarURL })
    );

    if (error) {
      Notify.failure(payload);
      return;
    }
    if (payload) {
      setNewAvatar(payload.photoURL || newAvatarURL);
      onClose();
    }
  };

  const handleAvatarChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setNewAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
      setSelectedFileName(file.name);
    }
  };

  const handleNameChange = event => {
    setInputName(event.target.value);
  };

  return (
    <DivWrapper>
      <button onClick={onClose} className="buttonClose">
        <IoMdClose />
      </button>
      <form className="formAvatar" onSubmit={handleSubmit}>
        <div className="containerImg">
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept=".jpg, .jpeg, .png"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="avatar" className="customUploadLabel">
            <img className="imgAvatar" src={newAvatar} alt="avatar" />
          </label>
        </div>
        <label className="labelText">
          <div className="containerLabel">
            <span className="spanLabel">Name:</span>
            <input
              className="inputNameUser"
              type="text"
              name="name"
              value={inputName}
              onChange={handleNameChange}
            />
          </div>
        </label>

        <button className="btnSubmit" type="submit">
          Save changes
        </button>
      </form>
    </DivWrapper>
  );
};

export default AvatarModalMarkup;
