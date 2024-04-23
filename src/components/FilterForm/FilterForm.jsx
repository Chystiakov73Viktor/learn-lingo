import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLanguagesFiltered,
  setLevelFiltered,
  setPriceFiltered,
} from '../../redux/filter/reducer';
import { CustomStyles, Wrapper } from './FilterForm.styled';
import * as yup from 'yup';
import { selectTeacherData } from '../../redux/teachers/selects';
import CustomSelect from '../CustomSelect';

const validationSchema = yup.object().shape({
  languages: yup.string().required('Languages is required'),
  price: yup.string().typeError('Price must be a number'),
  level: yup.string().typeError('Level of knowledge'),
});

export const FilterForm = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeacherData);
  const [languagesOptions, setLanguagesOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);
  const [levelOptions, setLevelOptions] = useState([]);

  useEffect(() => {
    if (teachers.length > 0) {
      const languages = Array.from(
        new Set(teachers.flatMap(item => item.languages))
      );
      const levels = Array.from(new Set(teachers.flatMap(item => item.levels)));
      const prices = Array.from(
        new Set(teachers.flatMap(item => item.price_per_hour))
      );

      setLanguagesOptions(
        languages.map(language => ({ value: language, label: language }))
      );
      setLevelOptions(levels.map(level => ({ value: level, label: level })));
      setPriceOptions(
        prices.map(price => ({ value: String(price), label: String(price) }))
      );
    }
  }, [teachers]);

  const formik = useFormik({
    initialValues: {
      languages: '',
      price: '',
      level: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      dispatch(setLanguagesFiltered(null));
      dispatch(setPriceFiltered(null));
      dispatch(setLevelFiltered(null));

      resetForm();
    },
  });

  const handleLanguagesChange = selectedOption => {
    dispatch(setLanguagesFiltered(selectedOption?.value || null));
  };

  const handlePriceChange = selectedOption => {
    const selectedValue = selectedOption ? selectedOption.value : null;
    dispatch(setPriceFiltered(selectedValue));

    const priceWidthElement = document.querySelector('.priceWidth');
    if (selectedValue) {
      priceWidthElement.classList.add('selected');
    } else {
      priceWidthElement.classList.remove('selected');
    }
  };

  const handletLevelChange = selectedOption => {
    dispatch(setLevelFiltered(selectedOption?.value || null));
  };

  const { handleSubmit, handleBlur, values, setFieldValue, touched, errors } =
    formik;

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <span className="labelText">Languages</span>
          <CustomSelect
            field={{
              name: 'languages',
              value: values.languages,
              onChange: value => setFieldValue('languages', value),
              onBlur: handleBlur,
            }}
            options={languagesOptions}
            placeholder="Languages"
            styles={CustomStyles}
            className="languagesWidth"
            onChange={handleLanguagesChange}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
          />
        </label>
        <label>
          <span className="labelText">Level of knowledge</span>
            <CustomSelect
              field={{
                name: 'level',
                value: values.level,
                onChange: value => setFieldValue('level', value),
                onBlur: handleBlur,
              }}
              options={levelOptions}
              placeholder="Level"
              styles={CustomStyles}
              className="levelWidth"
              onChange={handletLevelChange}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />
        </label>
        <label>
          <span className="labelText">Price</span>
          <CustomSelect
            field={{
              name: 'price',
              value: values.price,
              onChange: value => setFieldValue('price', value),
              onBlur: handleBlur,
            }}
            options={priceOptions}
            placeholder="Price"
            styles={CustomStyles}
            className="priceWidth"
            onChange={handlePriceChange}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
          />
        </label>
      </form>
    </Wrapper>
  );
};
