import { useDispatch } from 'react-redux';
import { signinThunk } from '../../redux/users/operations';
import { Notify } from 'notiflix';
import { SigninPageWrapper } from './Signin.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IoCloseOutline } from 'react-icons/io5';
import PasswordInput from '../../components/PasswordInput/PasswordInput';

const Signin = ({ onClose }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    userEmail: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    userPassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      userEmail: '',
      userPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const { error, payload } = await dispatch(
          signinThunk({
            email: values.userEmail,
            password: values.userPassword,
          })
        );

        if (error) {
          Notify.failure(payload);
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
    <SigninPageWrapper>
      <button type="button" className="buttonIcon" onClick={onClose}>
        <IoCloseOutline size="32" />
      </button>
      <h2 className="signinTitle">Sign In</h2>
      <p className="signinText">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form className="signinForm" onSubmit={handleSubmit}>
        <div className="inputWrapper">
          <label>
            <input
              type="email"
              placeholder="Email"
              className="inputSignin"
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
              className="inputSignin"
            />
            {touched.userPassword && errors.userPassword ? (
              <div className="error">{errors.userPassword}</div>
            ) : null}
          </label>
        </div>
        <button type="submit" className="buttonSignin" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </SigninPageWrapper>
  );
};

export default Signin;
