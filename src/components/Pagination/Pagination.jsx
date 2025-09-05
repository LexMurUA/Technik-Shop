import "./Pagination.css";

import { useAppContext } from "../../context/AppContext";
import data from "../../data/data.json";

export const Pagination = () => {
  const { perPage, showNumPage, backwardPage, forwardPage, currentPage, setCurrentPage } = useAppContext();

  // const pagesQuantity = Math.ceil(data.length / perPage);
  const pagesQuantity = 10; //just for testing quantity pages
  const pagesQuantityList = [];

  for (let index = 1; index <= pagesQuantity; index++) {
    pagesQuantityList.push(index);
  }


  return (
    <div className="pagination">
      <div className="pages">

        {currentPage != 1 && currentPage != pagesQuantity ? (
          <>
            {currentPage > 2 && (
              <>
                <button className={currentPage === 1 && 'active'} onClick={() => setCurrentPage(1)}>1</button>
                <span>...</span>
              </>
            )}
            <button onClick={() => setCurrentPage(currentPage - 1)}>{currentPage - 1}</button>
            <button className="active" >{currentPage}</button>
            <button onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 1}</button>
            {currentPage < pagesQuantity - 1 && (
              <>
                <span>...</span>
                <button className={currentPage === pagesQuantity ? 'active': ''} onClick={() => setCurrentPage(pagesQuantity)}>{pagesQuantity}</button>
              </>
            )}

          </>
        ) : (
          <>

            <button className={currentPage === 1 && 'active'} onClick={() => setCurrentPage(1)}>1</button>
            <button className={currentPage === pagesQuantity && 'active'} onClick={() => setCurrentPage(pagesQuantity)}>{pagesQuantity}</button>
          </>
        )}



        {/* {pagesQuantityList.map((page, idx) =>
        
            <div className="page-current" key={idx}>
              {page===currentPage ?(
                 <button
                className={page === currentPage && "active"}
                onClick={() => showNumPage(page)}>{page}</button>
              ): '...' }
             
            </div>
        )} */}
      </div>
      <div className="btns">
        <button disabled={currentPage === 1} onClick={backwardPage}>
          Назад
        </button>
        <button
          disabled={currentPage === pagesQuantityList.length}
          onClick={forwardPage}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};
