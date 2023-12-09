import ClockName from "./components/Name";
import BharatTime from "./components/TimeZone";
import { CurrentTime } from "./components/CurrentTime";
function App(){
    return(
      <div>
          <center>
            <ClockName />
            <BharatTime />
            <CurrentTime />
          </center>
        </div>
    )
}
export default App;