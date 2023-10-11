const PageNotFound = () => {
  return (
    <div className="page-not-found-container d-flex justify-content-center align-items-center flex-column">
      <h1 className="error">404</h1>
      <h4 className="p-3 text-center text-secondary">
        Ooops!!! The page you are looking for is not found.
      </h4>
      <a className="back-home rounded text-decoration-none" href="/">
        Back to home
      </a>
    </div>
  );
};

export default PageNotFound;
