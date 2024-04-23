import { WrapperDiv } from './CustomInput.styled';

const CustomInput = ({ formik }) => {
  const { handleChange, handleBlur, values, touched, errors } = formik;

  return (
    <WrapperDiv>
      <label className="label">
        <div className="containerLabel">
          <span className="spanLabel">Full Name</span>
          <input
            className="input inputName"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {touched.name && errors.name ? (
          <div className="error">{errors.name}</div>
        ) : null}
      </label>
      <label className="label">
        <div className="containerLabel">
          <span className="spanLabel">Email</span>
          <input
            className="input inputEmail"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {touched.email && errors.email ? (
          <div className="error">{errors.email}</div>
        ) : null}
      </label>
      <label className="label">
        <div className="containerLabel">
          <span className="spanLabel">Phone number</span>
          <input
            className="input inputNumber"
            type="tel"
            name="number"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {touched.number && errors.number ? (
          <div className="error">{errors.number}</div>
        ) : null}
      </label>
    </WrapperDiv>
  );
};

export default CustomInput;
