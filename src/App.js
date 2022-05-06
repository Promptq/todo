//import { useState } from "react";
import "./styles.css";
import { Tarihler } from "./yapilacakItem";
import Ekle from "./ekleme"
export default function App() {
  const date = new Date();
  var a = date.toDateString();
  const dat = require("./todo.json");
  //const [ekran,setEkran]=useState(true);

  
  return (
    <div className="App">
      <div className="tarih">
        <div>
          {date.toLocaleDateString()}
          <br />
          {a}
        </div>
        
      </div>

      <div className="card">
        <button onClick={() => console.log("datıug")}>xcxcx</button>
        <Ekle vtb={dat} />
        <Tarihler veri={dat} />
      </div>
    </div>
  );
}
//{dat.map((e) => <Aytem veri={e}/>)}
