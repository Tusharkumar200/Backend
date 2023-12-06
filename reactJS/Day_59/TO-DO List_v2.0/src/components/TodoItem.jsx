
import { MdDelete } from "react-icons/md";

function TodoItem({todoName,todoDate}) {

    
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
            {<MdDelete />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
