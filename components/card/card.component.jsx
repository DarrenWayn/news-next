import { _fetchDataViewed } from "../../pages/api/api";
import { useState } from "react";

const Card = () => {
  const periods = [
    { id: 1, option: 1 },
    { id: 2, option: 7 },
    { id: 3, option: 30 },
  ];
  const [selected, setSelected] = useState(periods[0].option);
  const { data: articleList } = _fetchDataViewed(selected);

  const periodHandleChange = (e) => {
    const getOption = e.target.value;
    setSelected(getOption);
  };

  return (
    <>
      <label htmlFor="cars">Choose previous day:</label>
      <select value={selected} onChange={periodHandleChange}>
        {periods.map((period) => (
          <option key={period.id}>{period.option}</option>
        ))}
      </select>
      <div className="card m-10 bg-gray-100">
        <div className="card_list">
          {articleList?.results.map((list) => {
            const { id, title, section, date } = list;
            const image = list?.media.map(
              (med) => med["media-metadata"][0]?.url
            );
            return (
              <>
                <img src={image} alt={section} />
                <div key={id} className="card_item">
                  <h1>{title}</h1>
                  <strong>{section}</strong>
                  <p>{date}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
