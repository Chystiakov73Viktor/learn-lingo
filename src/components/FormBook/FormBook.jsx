import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from './FormBook.styled';
import CustomRadioButtons from '../CustomRadioButtons/CustomRadioButtons';
import CustomInput from '../CustomInput/CustomInput';

export const FormBook = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
      category: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      number: Yup.string().min(7).max(20).required('Required'),
      category: Yup.string().required('Category is required'),
    }),
    onSubmit: values => {
      console.log('values: ', values);
      formik.resetForm();
    },
  });

  const radioOptions = [
    { value: 'career_business', label: 'Career and business' },
    { value: 'lesson_for_kids', label: 'Lesson for kids' },
    { value: 'living_abroad', label: 'Living abroad' },
    { value: 'exams_coursework', label: 'Exams and coursework' },
    { value: 'culture_travel_hobby', label: 'Culture, travel or hobby' },
  ];

  return (
    <Form onSubmit={formik.handleSubmit}>
      <CustomRadioButtons
        name="category"
        options={radioOptions}
        formik={formik}
      />
      <CustomInput formik={formik} />
      <button className="buttonSubmit" type="submit">
        Book
      </button>
    </Form>
  );
};
