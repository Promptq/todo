import { useState } from "react";
import "./ekle.css";

function Ekle({ veri, kayit }) {
  const [yapilacak, yaz] = useState("");
  const [tarih, sec] = useState();
  const [altItems, setAlt] = useState([]);

  const todo = {
    
    yapilacak: yapilacak,
    tarih: tarih,
    alt: altItems,
    check: false,
  };

  function tarihSec(e) {
    const trh = new Date(e.target.value);
    sec(trh.toDateString());
  }
  function yapilacakYaz(e) {
    yaz(e.target.value);
  }
  function ekl() {
    console.log(todo);
    kayit(todo);
  }
  function sil(sili) {
    setAlt((e) => e.filter((ele) => ele !== sili));
  }

  return (
    <div className="Ekle">
      <input type="date" onChange={tarihSec} onKeyUp={(e)=>{}}/>
      <input type="text" onChange={yapilacakYaz} />

      <button onClick={ekl}>ekle</button>
      <div>
        <div className="ana">
          <div className="icerik">{todo.yapilacak}</div>
          <Alt veri={[altItems, setAlt]} />
          <div className="alt">
            {altItems.map((e) => (
              <div className="items">
                <button
                  onClick={() => {
                    sil(e);
                  }} style={{width:"48px"}}
                >
                  X
                </button>
                <p>{e.yapilacak}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function Alt({ veri }) {
  const [yapilacak, syap] = useState("");
  const altItem = {
    yapilacak: yapilacak,
    check: false,
  };
  const c = (e) => {
    syap(e.target.value);
  };

  return (
    <div>
      <input
        onChange={c}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value !== "") {
            veri[1]([...veri[0], altItem]);
            e.target.value=""
            console.log(veri[0]);
          }
        }}
      ></input>
    </div>
  );
}

export default Ekle;
