import { WrapperDiv } from './CustomRadioButtons.styled';

const CustomRadioButtons = ({ options, name, formik }) => {
  const { handleChange, values } = formik;

  return (
    <WrapperDiv>
      {options.map(option => (
        <label key={option.value} className="labelRadio">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={values[name] === option.value}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </WrapperDiv>
  );
};

export default CustomRadioButtons;
