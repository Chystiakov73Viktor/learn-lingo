import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Section } from '../Section/Section';
import { Wrapper } from './FindTeacherSection.styled';
import imgFace from '../../images/img.svg';
import { IoLogoApple } from 'react-icons/io5';

const FindTeacherSection = () => {
  const navigate = useNavigate();

  const [randomLightColor, setRandomLightColor] = useState('');
  const [randomDarkColor, setRandomDarkColor] = useState('');

  const handleGetStartedClick = () => {
    const destination = '/teachers';
    navigate(destination);
  };

  const darkColors = ['#F4C550', '#9FBAAE', '#9FB7CE', '#E0A39A', '#F0AA8D'];
  const lightColors = ['#FBE9BA', '#CBDED3', '#BFD6EA', '#F2C0BD', '#F4C8BA'];

  function getRandomColorFromArray(lightColors, darkColors) {
    const randomIndex = Math.floor(Math.random() * lightColors.length);
    const randomLightColor = lightColors[randomIndex];
    const randomDarkColor = darkColors[randomIndex];
    return { randomLightColor, randomDarkColor };
  }

  useEffect(() => {
    updateColors();
  }, []);

  const updateColors = () => {
    const randomColor = getRandomColorFromArray(lightColors, darkColors);
    setRandomLightColor(randomColor.randomLightColor);
    setRandomDarkColor(randomColor.randomDarkColor);
  };

  return (
    <Section className="hero">
      <Wrapper
        $randomLightColor={randomLightColor}
        $randomDarkColor={randomDarkColor}
      >
        <div className="wrapperTextImg">
          <div className="containerText">
            <h1 className="title">
              Unlock your potential with the best{' '}
              <button className="buttonTitle" type="button">
                language
              </button>{' '}
              tutors
            </h1>
            <p className="text">
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <button
              className="buttonStarted"
              type="button"
              onClick={handleGetStartedClick}
            >
              Get started
            </button>
          </div>
          <div className="imgWrapper">
            <img className="img" src={imgFace} alt="teacher" />
            <div className="containerApple">
              <IoLogoApple
                style={{ color: randomLightColor, width: '47', height: '57' }}
              />
            </div>
          </div>
        </div>
        <ul
          className="listTutors"
          style={{ border: `1.5px dashed ${randomLightColor}` }}
        >
          <li className="itemTutors">
            <h2 className="titleTutors">32,000</h2>
            <p className="textTutors">Experienced tutors</p>
          </li>
          <li className="itemTutors">
            <h2 className="titleTutors">300,000</h2>
            <p className="textTutors">5-star tutor reviews</p>
          </li>
          <li className="itemTutors">
            <h2 className="titleTutors">120</h2>
            <p className="textTutors">Subjects taught</p>
          </li>
          <li className="itemTutors">
            <h2 className="titleTutors">200</h2>
            <p className="textTutors">Tutor nationalities</p>
          </li>
        </ul>
      </Wrapper>
    </Section>
  );
};

export default FindTeacherSection;
