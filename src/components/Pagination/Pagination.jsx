import "./Pagination.css";

import { useAppContext } from "../../context/AppContext";
import data from "../../data/data.json";

export const Pagination = () => {
  const { perPage, showNumPage, backwardPage, forwardPage,currentPage } = useAppContext();

  const pagesQuantity = Math.ceil(data.length / perPage);
  const pagesQuantityList = [];

  for (let index = 1; index <= pagesQuantity; index++) {
    pagesQuantityList.push(index);
  }
  

  return (
    <div className="pagination">
      <div className="pages">
        {pagesQuantityList.map((page, idx) =>
        
            <div className="page-current" key={idx}>
              {page===currentPage ?(
                 <button
                className={page === currentPage && "active"}
                onClick={() => showNumPage(page)}>{page}</button>
              ): '...' }
             
            </div>



         
        )}
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
