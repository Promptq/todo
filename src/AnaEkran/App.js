import { useState } from "react";
import "./styles.css";
import { Tarihler } from "../Todolar/yapilacakItem";
import Ekle from "../Ekleme/ekleme";
function App() {
  const date = new Date();
  const dat = require("./todo.json");
  const [ekran, setEkran] = useState(true);
  const [todoss, setTodos] = useState(dat);
  const scrn = (yeni) => {
    setEkran(!ekran);
    if (yeni.yapilacak !== "") setTodos([...todoss, yeni]);
    console.log(todoss);
  };
  const islem = (veri) => {
    let a = todoss.findIndex((e) => e === veri);
    todoss[a].check = !todoss[a].check;
  };
  function sil(silinecek) {
    if(window.confirm("Emin misin?"))setTodos(e=>e.filter(el=>el!==silinecek))
    
  }
  const islemAlt = (parent, child) => {
    const a = todoss.findIndex((e) => e === parent);
    const b = todoss[a].alt.findIndex((e) => e === child);
    console.log(todoss[a].alt);
    todoss[a].alt[b].check = !todoss[a].alt[b].check;
  };
  const todos = (
    <Tarihler veri={todoss} islem={islem} altIslem={islemAlt} sil={sil} />
  );
  const ekle = <Ekle veri={todoss} ekran={ekran} kayit={scrn} />;
  return (
    <div className="App">
      <div className="tarih">
        <div>{date.toLocaleDateString()}</div>
      </div>

      <div className="card">
        <button onClick={() => setEkran(!ekran)}>
          {ekran ? "Ekle" : "anasayfa"}
        </button>
        {ekran ? todos : ekle}
      </div>
    </div>
  );
}

export { App };