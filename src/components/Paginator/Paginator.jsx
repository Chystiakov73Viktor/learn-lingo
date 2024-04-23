import { useState } from 'react';
import { WrapperDiv } from './Paginator.styled';

const Paginator = ({ data, itemsPerPage, renderCardList }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const loadNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const loadPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <WrapperDiv>
      {renderCardList(paginatedData)}
      {totalPages > 1 && (
        <div className='containerButton'>
          <button
            className="button"
            type="button"
            onClick={loadPrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="button"
            type="button"
            onClick={loadNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </WrapperDiv>
  );
};

export default Paginator;
