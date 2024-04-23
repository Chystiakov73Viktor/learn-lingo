import { getTeachers } from "../teachers/operations";

export const filterTeachersByLanguages = async languages => {
  try {
    const teachers  = await getTeachers();
    return teachers .filter(teacher => teacher.languages === languages);
  } catch (error) {
    throw new Error('Failed to filter cars by brand');
  }
};

export const filterTeachersByPrice = async price => {
  try {
    const teachers = await getTeachers();
    return teachers.filter(teacher => teacher.price === price);
  } catch (error) {
    throw new Error('Failed to filter cars by brand');
  }
};

export const filterTeachersLevel = async level => {
  try {
    const teachers = await getTeachers();
    console.log('teachers: ', teachers);
    return teachers.filter(teacher => teacher.level === level);
  } catch (error) {
    throw new Error('Failed to filter teachers by brand');
  }
};