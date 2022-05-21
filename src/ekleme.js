import { useState } from "react";
import "./ekle.css";

function Ekle({ veri, kayit }) {
  const [yapilacak, yaz] = useState("");
  const [tarih, sec] = useState();
  const todo = {
    id: veri.length + 1,
    yapilacak: yapilacak,
    tarih: tarih,
    alt: [],
    check: false,
  };

  const [altItems, setAlt] = useState([]);
  const [altComp, setAltComp] = useState([]);
  function tarihSec(e) {
    const trh = new Date(e.target.value);
    sec(trh.toDateString());
  }
  function yapilacakYaz(e) {
    yaz(e.target.value);
  }
  function ekl() {
    //console.log(veri)
    kayit(todo);
  }
  const altItem = {
    yapilacak: yapilacak,
    check: false,
  }
  function altEkle() {
    
    altItems.push(altItem)
    setAlt([...altItems]);
  }
  function cikar() {
    altItems.pop()
    altComp.pop()
    setAlt([...altItems])
  }
  function altTani(id,yapil){
    altItems[id].yapilacak=yapil
    console.log(altItems);
    todo.alt=altItems
    console.clear()
    console.log(todo)
  }
  function olustur(){
    altEkle()
    altItems.forEach((elem)=>setAltComp([...altComp,<Alt id={altComp.length} fonk={altTani}/>]))
  }
  
  return (
    <div className="Ekle">
      <input type="date" onChange={tarihSec} />
      <input type="text" onChange={yapilacakYaz} />

      <button onClick={ekl}>bozuldu</button>
      <div>
        <div className="ana">
          <div className="icerik">
            {todo.yapilacak} <button onClick={olustur}>alt ekle</button>{" "}
            <button onClick={cikar}>cikar</button>
          </div>
          <div>{altComp}</div>
        </div>
      </div>
    </div>
  );
}
function Alt(props) {
  const [yapilacak, syap] = useState("");
  
  const c=(e)=>{
    syap(e.target.value)
    
  }
  function b(){props.fonk(props.id,yapilacak)}
  return (
    <div>
      {props.id}
      <button onClick={b}>x</button>
      <input onChange={c}></input>
    </div>
  );
}

export default Ekle;
