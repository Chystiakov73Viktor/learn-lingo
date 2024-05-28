import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Section } from 'components/Section/Section';
import { selectTeacherIsLoading } from '../redux/teachers/selects';
import { getTeachers } from '../redux/teachers/operations';
import { Loader } from 'components/Loader/Loader';
import Paginator from 'components/Paginator/Paginator';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { CardMarkupList } from '../components/CardMarkupList/CardMarkupList';
import { selectFilteredCard } from '../redux/filter/selects';

function Teachers() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectTeacherIsLoading);
  const filteredCard = useSelector(selectFilteredCard);

  const itemsPerPage = 4;

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const renderCardList = paginatedData => {
    return <CardMarkupList dataCard={paginatedData} />;
  };

  return (
    <Section className="carsListSection" titleClassName="titleCatalog">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {filteredCard.length !== 0 && (
            <>
              <FilterForm />
              <Paginator
                data={filteredCard}
                itemsPerPage={itemsPerPage}
                renderCardList={renderCardList}
              />
            </>
          )}
        </>
      )}
    </Section>
  );
}

export default Teachers;