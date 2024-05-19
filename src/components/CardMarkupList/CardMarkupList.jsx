import { CardMarkupItem } from 'components/CardMarkupItem/CardMarkupItem';
import { DivWrapper } from './CardMarkupList.styled';

export const CardMarkupList = ({ dataCard }) => {
  return (
    <DivWrapper>
      <ul className="list">
        {dataCard && dataCard.map(item => (
          <CardMarkupItem key={item.id} cardData={item} />
        ))}
      </ul>
    </DivWrapper>
  );
};
