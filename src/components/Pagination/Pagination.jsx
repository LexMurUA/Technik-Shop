import { useAppContext } from "../../context/AppContext";
import data from "../../data/data.json";

export const Pagination = () => {
  const { perPage, setCurrentPage, showNumPage } = useAppContext();

  const pagesQuantity = Math.ceil(data.length / perPage);
  const pagesQuantityList = [];

  for (let index = 1; index <= pagesQuantity; index++) {
    pagesQuantityList.push(index);
  }
  console.log(pagesQuantityList);

  return (
    <div>
      {pagesQuantityList.map((page, idx) => (
        <div key={idx}>
          <button onClick={() => showNumPage(page)}>{page}</button>
        </div>
      ))}

      <button>Назад</button>
      <button>Вперед</button>
    </div>
  );
};
