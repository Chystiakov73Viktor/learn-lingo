import { Notify } from 'notiflix';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import { LiWrapper } from './CardMarkupItem.styled';
import { useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { CardModalList } from 'components/CardModalList/CardModalList';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selects';
import { addFavorite, removeFavorite } from '../../redux/favorites/reducer';
import { IoBookOutline } from 'react-icons/io5';
import { PiStarFill } from 'react-icons/pi';
import { IoEllipse } from 'react-icons/io5';
import { selectUserIsSignIn } from '../../redux/users/selects';
import { selectFilteredLevel } from '../../redux/filter/selects';

export const CardMarkupItem = ({ cardData }) => {
  const {
    id,
    avatar_url,
    name,
    surname,
    conditions,
    languages,
    lesson_info,
    lessons_done,
    levels,
    price_per_hour,
    rating,
    reviews,
    experience,
  } = cardData;
  const dispatch = useDispatch();
  const isLogged = useSelector(selectUserIsSignIn);
  const favorites = useSelector(selectFavorites);
  const selectedLevel = useSelector(selectFilteredLevel);
  const [isFavorite, setIsFavorite] = useState(false);
  const [defaultAvatar, setDefaultAvatar] = useState(null);
  const [defaultAvatarReviews, setDefaultAvatarReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [iconColorEmpty, setIconColorEmpty] = useState('#333');
  const [iconColorFilled, setIconColorFilled] = useState('red');

  useEffect(() => {
    const generateDefaultAvatar = name => {
      if (name && name.length >= 2) {
        const initials = name
          .split(' ')
          .map(part => part.charAt(0))
          .join('')
          .toUpperCase();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 100;
        canvas.height = 100;
        ctx.fillStyle = '#3470ff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(initials, canvas.width / 2, canvas.height / 2);
        return canvas.toDataURL();
      }
      return null;
    };

    const defaultAvatarUrl = generateDefaultAvatar(name);
    const defaultReviewerAvatars = reviews.map(review =>
      generateDefaultAvatar(review.reviewer_name)
    );
    setDefaultAvatar(defaultAvatarUrl);
    setDefaultAvatarReviews(defaultReviewerAvatars);
  }, [name, reviews]);

  useEffect(() => {
    setIsFavorite(favorites.some(favorite => favorite.id === id));
  }, [favorites, id]);

  useEffect(() => {
    if (isFavorite) {
      setIconColorFilled('red');
    } else {
      setIconColorEmpty('#333');
      setIconColorFilled('red');
    }
  }, [isFavorite]);

  const handleButtonIcon = () => {
    if (isLogged) {
      if (isFavorite) {
        dispatch(removeFavorite(id));
        setIsFavorite(false);
      } else {
        dispatch(addFavorite(cardData));
        setIsFavorite(true);
      }
    } else {
      Notify.failure('To add to favorites, please log in to your account!');
    }
  };

  const handleButtonReviews = () => {
    setShowReviews(true);
  };

  const openButtonModal = () => {
    setIsModalOpen(true);
  };

  const closeButtonModal = () => {
    setIsModalOpen(false);
  };

  return (
    <LiWrapper key={id} className="item">
      <button type="button" className="buttonIcon" onClick={handleButtonIcon}>
        {isLogged ? (
          isFavorite ? (
            <IoMdHeart color={iconColorFilled} size="18" />
          ) : (
            <IoMdHeartEmpty color={iconColorEmpty} size="18" />
          )
        ) : (
          <IoMdHeartEmpty color={iconColorEmpty} size="18" />
        )}
      </button>
      {isModalOpen && (
        <Modal onClose={closeButtonModal}>
          <CardModalList cardData={cardData} onClose={closeButtonModal} />
        </Modal>
      )}
      <div className="avatar">
        <img
          className="avatarUrl"
          src={avatar_url || defaultAvatar}
          alt="avatar"
          style={{ cursor: 'pointer' }}
        />
        <span className="avatarEllipseOutline">
          <IoEllipse size="12" style={{ color: '#fff' }} />
        </span>
        <span className="avatarEllipse">
          <IoEllipse size="8" style={{ color: '#38cd3e' }} />
        </span>
      </div>
      <div className="containerInfo">
        <ul className="listInfo">
          <li className="itemInfo">languages</li>
          <li className="itemInfo">
            <span className="bookIcon">
              <IoBookOutline />
            </span>
            Lessons online
          </li>
          <li className="itemInfo">
            Lesson done:
            {lessons_done}
          </li>
          <li className="itemInfo">
            <span className="starIcon">
              <PiStarFill style={{ color: '#ffc531' }} />
            </span>
            Rating:
            {rating}
          </li>
          <li className="itemInfo">
            Price / 1 hour:
            <span className="price">{price_per_hour + `$`}</span>
          </li>
        </ul>
        <ul className="listName">
          <li className="titleName">{name}</li>
          <li className="titleName">{surname}</li>
        </ul>
        <ul className="listSpeaks">
          <li className="itemSpeaks">
            Speaks:{' '}
            <span className="languages">
              {languages ? languages.join(', ') : ''}
            </span>
          </li>
          <li className="itemSpeaks">
            Lesson info: <span className="lesson">{lesson_info}</span>
          </li>
          <li className="itemSpeaks">
            Conditions: <span className="lesson">{conditions}</span>
          </li>
        </ul>
        <button
          type="button"
          className="buttonReadMore"
          onClick={handleButtonReviews}
          style={{ display: showReviews ? 'none' : 'block' }}
        >
          Read more
        </button>
        {showReviews && (
          <>
            <p className="textExperience">{experience}</p>
            <ul className="listReviews">
              <li className="itemReviews">
                <div className="containerReviews">
                  <img
                    className="avatarReviews"
                    src={defaultAvatarReviews[0]}
                    alt="avatar"
                    style={{ cursor: 'pointer' }}
                  />
                  <div className="containerRating">
                    <p className="textReniewerName">
                      {reviews[0].reviewer_name}
                    </p>
                    <p className="textReniewerRating">
                      <span className="starIcon">
                        <PiStarFill style={{ color: '#ffc531' }} />
                      </span>
                      {reviews[0].reviewer_rating.toFixed(1)}
                    </p>
                  </div>
                </div>
                <p className="textReviews">{reviews[0].comment}</p>
              </li>
              <li className="itemReviews">
                <div className="containerReviews">
                  <img
                    className="avatarReviews"
                    src={defaultAvatarReviews[1]}
                    alt="avatar"
                    style={{ cursor: 'pointer' }}
                  />
                  <div className="containerRating">
                    <p className="textReniewerName">
                      {reviews[1].reviewer_name}
                    </p>
                    <p className="textReniewerRating">
                      <span className="starIcon">
                        <PiStarFill style={{ color: '#ffc531' }} />
                      </span>
                      {reviews[1].reviewer_rating.toFixed(1)}
                    </p>
                  </div>
                </div>
                <p className="textReviews">{reviews[1].comment}</p>
              </li>
            </ul>
          </>
        )}
        <ul className="listButton">
          {levels &&
            levels.map((level, index) => (
              <li key={index} className="itemButton">
                <button
                  className={`levelButton ${
                    selectedLevel === level ? 'selected' : ''
                  }`}
                  type="button"
                >
                  {level}
                </button>
              </li>
            ))}
        </ul>
        {showReviews && (
          <button
            type="button"
            className="buttonTrialLesson"
            onClick={openButtonModal}
          >
            Book trial lesson
          </button>
        )}
      </div>
    </LiWrapper>
  );
};
