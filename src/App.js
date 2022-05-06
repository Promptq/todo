import "./styles.css";
import {  Tarihler } from "./yapilacakItem";
export default function App() {
  const date = new Date();
  
  const dat = require("./todo.json");
  return (
    <div className="App">
      <div>
        {date.toLocaleDateString()}
        <br />
        {date.getDate()+"."+date.getMonth()+"."+date.getFullYear()}
      </div>

      <div className="card">
        <button onClick={() => console.log(dat)}>xcxcx</button>

        <Tarihler veri={dat} />
      </div>
    </div>
  );
}
//{dat.map((e) => <Aytem veri={e}/>)}
