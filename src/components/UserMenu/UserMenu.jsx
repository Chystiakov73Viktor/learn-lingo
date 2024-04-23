import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DivWrapper } from './UserMenu.styled';
import { selectUser } from '../../redux/users/selects';
import { signoutThunk } from '../../redux/users/operations';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AvatarMarkup } from '../AvatarMarkup/AvatarMarkup';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUser);

  useEffect(() => {
    if (name) {
      toast.success(`Welcome, ${name}!`);
    } else {
      toast.info('Logged out successfully!');
    }
  }, [name]);

  return (
    <DivWrapper>
      <button
        className="button"
        type="button"
        onClick={() => dispatch(signoutThunk())}
      >
        Log out
      </button>
      <AvatarMarkup />
      <ToastContainer />
    </DivWrapper>
  );
};

export default UserMenu;
