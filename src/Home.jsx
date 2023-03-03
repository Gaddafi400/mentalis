import help from './assets/Help.png';

const Home = () => {
  return (
    <>
      <header className="main-header">
        <div className="main-header__content">
          <h1>Hi Marie</h1>
          <img src={help} alt="path" className="help-img" />
        </div>
        <div className="main-header__content_upload">
          <h3>Upload your session’s recordings</h3>
          <button className="btn btn-upload">Upload</button>
        </div>
      </header>
    </>
  );
};

export default Home;
