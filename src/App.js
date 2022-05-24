import { useState } from "react";
import "./styles.css";
import { Tarihler } from "./yapilacakItem";
import Ekle from "./ekleme";
export default function App() {
  const date = new Date();
  const dat = require("./todo.json");
  const [ekran, setEkran] = useState(true);
  const [todoss, setTodos] = useState(dat);
  const scrn = (yeni) => {
    setEkran(!ekran);
    if (yeni.yapilacak !== "") setTodos([...todoss, yeni]);
    console.log("yarram2");
  };
  const islem = (veri) => {
    let a = todoss.findIndex((e) => e === veri);
    todoss[a].check = !todoss[a].check;

  
  };
  const islemAlt = (parent, child) => {
    let a = todoss.findIndex((e) => e === parent);
    let b = todoss[a].alt.findIndex((e) => e === child);
    console.log(todoss[a].alt)
    todoss[a].alt[b].check = !todoss[a].alt[b].check;
  };
  const todos = <Tarihler veri={todoss} islem={islem} altIslem={islemAlt} />;
  const addition = <Ekle veri={todoss} ekran={ekran} kayit={scrn} />;
  return (
    <div className="App">
      <div className="tarih">
        <div>{date.toLocaleDateString()}</div>
      </div>

      <div className="card">
        <button onClick={() => setEkran(!ekran)}>
          {ekran ? "ekle" : "anasayfa"}
        </button>
        {ekran ? todos : addition}
      </div>
    </div>
  );
}
//{dat.map((e) => <Aytem veri={e}/>)}
