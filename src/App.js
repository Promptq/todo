import { useState } from "react";
import "./styles.css";
import { Tarihler } from "./yapilacakItem";
import Ekle from "./ekleme";
export default function App() {
  const date = new Date();
  const dat = require("./todo.json");
  const [ekran, setEkran] = useState(true);
  const bos = new Date(2022, 11, 1);
  const [todoss, setTodos] = useState(dat);
  const scrn = (yeni) => {
    setEkran(!ekran);
    if (yeni.yapilacak !== "") setTodos([...todoss, yeni]);
    console.log("yarram2");
  };
  const islem = (veri) => {
    let a= todoss.findIndex((e) => (e === veri));
    todoss[a].check=!todoss[a].check
    
    
    console.log(todoss[todoss.length-1]);
  };

  const todos = <Tarihler veri={todoss} islem={islem} />;
  const addition = <Ekle veri={todoss} ekran={ekran} kayit={scrn} />;
  return (
    <div className="App">
      <div className="tarih">
        <div>
          {date.toLocaleDateString()}
          <br />
          {bos.toLocaleDateString()}
        </div>
      </div>

      <div className="card">
        <button onClick={()=>setEkran(!ekran)}>{ekran ? "ekle":"anasayfa"}</button>
        {ekran ? todos : addition}
      </div>
    </div>
  );
}
//{dat.map((e) => <Aytem veri={e}/>)}
