import { Section } from 'components/Section/Section';
import { selectTeacherIsLoading } from '../redux/teachers/selects';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import Paginator from 'components/Paginator/Paginator';
import Placeholder from '../components/Placeholder/Placeholder';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { CardMarkupList } from '../components/CardMarkupList/CardMarkupList';
import { selectFilteredFavorites } from '../redux/filter/selects';

function Favorites() {
  const favoritesFiltered = useSelector(selectFilteredFavorites);
  const isLoading = useSelector(selectTeacherIsLoading);

  const itemsPerPage = 4;

  const renderCardList = paginatedData => {
    return <CardMarkupList dataCard={paginatedData} />;
  };

  return (
    <Section className="carsListSection" titleClassName="titleCatalog">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {favoritesFiltered.length !== 0 ? (
            <>
            <FilterForm />
            <Paginator
                data={favoritesFiltered}
                itemsPerPage={itemsPerPage}
                renderCardList={renderCardList}
              />
              </>
          ) : (
            <Placeholder />
          )}
        </>
      )}
    </Section>
  );
}

export default Favorites;