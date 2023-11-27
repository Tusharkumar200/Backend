function TodoItem2() {
  return (
    <>
      <div className="container text-center" p-2>
        <div className="row">
          <div className="col-6">
            <p>GoTo Collage </p>
          </div>
          <div className="col-4 -m 2px">
            <p>11/12/23</p>
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
export default TodoItem2;
