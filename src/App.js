import { useState } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Modal from './Modal';
import Table from './Table';

function App() {
  const [modal, setModal] = useState(false);

  const handleOpen = () => {
    setModal(() => {
      return setModal(true);
    });
  };

  const handleClose = () => {
    return setModal(false);
  };

  return (
    <>
      <NavBar />
      <Home modal={handleOpen} />
      <Table />
      {modal && <Modal handleClose={handleClose} />}
    </>
  );
}

export default App;
