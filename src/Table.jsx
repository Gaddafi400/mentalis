import notification from './assets/Notification.png';
import loading from './assets/Loading.png';
import trash from './assets/Trash.png';
import { useState } from 'react';

const userInfo = [
  {
    id: 1,
    client: 'Joe Bellion',
    type: 'Progress Note',
    ETA: loading,
    trash: trash,
  },
  {
    id: 2,
    client: 'Joe Bellion',
    type: 'Extended Note',
    ETA: loading,
    trash: trash,
  },
];

const Table = () => {
  const [data, setData] = useState(userInfo);

  const handleDelete = (id) => {
    setData((items) => {
      return items.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <article className="table">
      <header className="notification">
        <img
          src={notification}
          className="notification-img"
          alt="notification"
        />{' '}
        <span className="note">Notes in progress</span>
      </header>
      <main className="table-header">
        <ul>
          <li>Client</li>
          <li className="hidden">Type</li>
          <li className="hidden">ETA</li>
          <li className="hidden">{''}</li>
        </ul>
      </main>
      <main className="table-body">
        {data.map((data) => (
          <ul key={data.id}>
            <li>{data.client}</li>
            <li className="li-type hidden">{data.type}</li>
            <li className="li-ETA">
              <img src={data.ETA} alt="ETA" />
            </li>
            <li>
              <img
                className="hidden"
                src={data.trash}
                alt="trash can"
                onClick={() => handleDelete(data.id)}
              />
            </li>
            <li>{''}</li>
          </ul>
        ))}
      </main>
    </article>
  );
};

export default Table;
