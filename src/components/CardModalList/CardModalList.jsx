import { CardModalMarkup } from 'components/CardModalMarkup/CardModalMarkup';

export const CardModalList = ({ cardData, onClose }) => {
  return (
    <ul className="list">
      <CardModalMarkup cardData={cardData} onClose={onClose} />
    </ul>
  );
};
