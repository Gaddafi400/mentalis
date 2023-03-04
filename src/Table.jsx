import notification from './assets/Notification.png';
import loading from './assets/Loading.png';
import trash from './assets/Trash.png';

const data = [
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
          <li>Type</li>
          <li>ETA</li>
          <li>{''}</li>
        </ul>
      </main>
      <main className="table-body">
        {data.map((data) => (
          <ul key={data.id}>
            <li>{data.client}</li>
            <li className="li-type">{data.type}</li>
            <li className="li-ETA">
              <img src={data.ETA} alt="" />
            </li>
            <li>
              <img src={data.trash} alt="" />
            </li>
            <li>{''}</li>
          </ul>
        ))}
      </main>
    </article>
  );
};

export default Table;
