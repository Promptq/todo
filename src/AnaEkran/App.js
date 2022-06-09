import { useState } from "react";
import "./styles.css";
import { Tarihler } from "../Todolar/yapilacakItem";
import Ekle from "../Ekleme/ekleme";
function App() {
  const date = new Date();
  const dat = require("./todo.json");
  const [ekran, setEkran] = useState(true);
  const [todoss, setTodos] = useState(dat);
  const sayfa = (yeni) => {
    setEkran(!ekran);
    if (yeni.yapilacak !== "") setTodos([...todoss, yeni]);
    console.log(todoss);
  };
  const check = (veri) => {
    let a = todoss.findIndex((element) => element === veri);
    todoss[a].check = !todoss[a].check;
    console.log(todoss)
  };
  function sil(silinecek) {
    if (window.confirm(silinecek.yapilacak+" silinsin mi?"))
      setTodos((dizi) => dizi.filter((element) => element !== silinecek));
  }
  const parcaCheck = (parent, child) => {
    const a = todoss.findIndex((e) => e === parent);
    const b = todoss[a].parca.findIndex((e) => e === child);
    console.log(todoss[a].parca);
    todoss[a].parca[b].check = !todoss[a].parca[b].check;
  };
  const todos = <Tarihler veri={todoss} check={check} parcaCheck={parcaCheck} sil={sil} />;
  const ekle = <Ekle ekran={ekran} kayit={sayfa} />;
  return (
    <div className="App">
      <div className="tarih">
        <div>{date.toLocaleDateString()}</div>
      </div>

      <div className="card">
        <button onClick={() => setEkran(!ekran)}>
          {ekran ? "Ekle" : "Anasayfa"}
        </button>
        {ekran ? todos : ekle}
      </div>
    </div>
  );
}

export { App };
