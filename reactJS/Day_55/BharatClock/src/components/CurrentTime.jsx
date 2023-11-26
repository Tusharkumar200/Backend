
export function CurrentTime(){
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>Todays Date :{date} </p>
                    <p>This is the Current Time : {time}
                    </p>

                </div>
            </div>
        </div>
    )
}