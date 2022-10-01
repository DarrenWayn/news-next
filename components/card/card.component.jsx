import React from 'react';
import FetchDataViewed from '../../pages/api/api';

const card = () => {
  const period = [1, 7, 30];
  // const { isLoading: ld, error: err, data: email } = FetchDataEmailed(period[0]);
  const { isLoading, error, data } = FetchDataViewed(period[2]);
  console.log(data);
  // console.log(email);

  isLoading && 'Loading...';
  error && 'An error has occurred: ' + error.message;

  return (
    <div className="card m-10 bg-gray-100">
      <div className="card_list grid w-[100vw] grid-cols-autofit gap-10 ">
        <div className="card_item border border-sky-500 bg-gray-200">
          <h1>Title</h1>
          <h2>Content</h2>
          <p>description</p>
        </div>

        <div className="card_item">
          <h1>Title</h1>
          <h2>Content</h2>
          <p>description</p>
        </div>

        <div className="card_item">
          <h1>Title</h1>
          <h2>Content</h2>
          <p>description</p>
        </div>
        <div className="card_item">
          <h1>Title</h1>
          <h2>Content</h2>
          <p>description</p>
        </div>
      </div>
    </div>
  );
};

export default card;
