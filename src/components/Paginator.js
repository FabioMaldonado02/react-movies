const Paginator = ({ currentPage, getNextPage, getPrevPage }) => {
  return (
    <div>
      <p>PAGE: {currentPage}</p>
      <button onClick={() => getPrevPage()}>Prev</button>
      <button onClick={() => getNextPage()}>Next</button>
    </div>
  );
};

export default Paginator;
