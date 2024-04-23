import { useDispatch } from 'react-redux';
import { signupThunk } from '../../redux/users/operations.js';
import { Notify } from 'notiflix';
import { SignupPageWrapper } from './Signup.styled.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IoCloseOutline } from 'react-icons/io5';
import PasswordInput from '../../components/PasswordInput/PasswordInput.jsx';

const Signup = ({ onClose }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Name is required'),
    userEmail: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    userPassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      userName: '',
      userEmail: '',
      userPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const { error, payload } = await dispatch(
          signupThunk({
            name: values.userName,
            email: values.userEmail,
            password: values.userPassword,
          })
        );

        if (error) {
          Notify.failure(payload);
          console.error('Signup error:', payload);
        } else {
          resetForm();
        }
      } catch (error) {
        console.error('Unexpected error:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    values,
    touched,
    errors,
  } = formik;

  return (
    <SignupPageWrapper>
      <button type="button" className="buttonIcon" onClick={onClose}>
        <IoCloseOutline size="32" />
      </button>
      <h2 className="signupTitle">Registration</h2>
      <p className="signupText">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <form className="signupForm" onSubmit={handleSubmit}>
        <div className="inputWrapper">
          <label>
            <input
              type="text"
              name="userName"
              className="inputSignup"
              placeholder="Name"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.userName && errors.userName ? (
              <div className="error">{errors.userName}</div>
            ) : null}
          </label>
          <label>
            <input
              type="email"
              placeholder="Email"
              className="inputSignup"
              name="userEmail"
              value={values.userEmail}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.userEmail && errors.userEmail ? (
              <div className="error">{errors.userEmail}</div>
            ) : null}
          </label>
          <label>
            <PasswordInput
              name="userPassword"
              value={values.userPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="inputSignup"
            />
            {touched.userPassword && errors.userPassword ? (
              <div className="error">{errors.userPassword}</div>
            ) : null}
          </label>
        </div>
        <button type="submit" className="buttonSignup" disabled={isSubmitting}>
          {isSubmitting ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </SignupPageWrapper>
  );
};

export default Signup;
