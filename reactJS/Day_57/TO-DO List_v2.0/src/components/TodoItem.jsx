function TodoItem({toName,toDate}) {



  return (
    <>
      <div className="container text-center p-2">
        <div className="row">
          <div className="col-6">
            <p>{toName} </p>
          </div>

          <div className="col-4">
            <p>{toDate}</p>
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
 