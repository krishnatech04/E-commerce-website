import Header from "./../routes/Header";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="post_title">An Error Occured</h2>
        <h3 className="post_title"> Page Not Found!!</h3>
      </div>
    </>
  );
};

export default PageNotFound;
