const Container = ({children}) => {
  return (
    <div className ="card">
      <div className ="card-body card-data">
      {children}
      </div>
    </div>
  );
};

export default Container;
