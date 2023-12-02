function TodoItem() {
const todoName = 'ghee';
const todoDate = '10/07/2023'
    
  return (
    <>
      <div className="container text-center p-2">
        <div className="row">
          <div className="col-6">
            <p> {todoName}</p>
          </div>
          <div className="col-4">
            <p>{todoDate}</p>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
