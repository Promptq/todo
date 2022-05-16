import { useState } from "react";
import "./ekle.css";
function Ekle({veri,kayit}) {
  const [yapilacak,yaz]=useState("")
  const [tarih,sec]=useState()
  const todo = {
    id: veri.length+1,
    yapilacak: yapilacak,
    tarih: tarih,
    check: false,
    
  };
  function tarihSec(e){
    const trh=new Date(e.target.value)
    sec(trh.toDateString())
  }
  function yapilacakYaz(e){

    yaz(e.target.value)
  }
  function ekl(e){
    console.log(veri)
    kayit(todo)
    
  }
  



  return (
    <div className="Ekle">
      <input type="date" onChange={tarihSec}/>
      <input type="text" onChange={yapilacakYaz}/>

      <button onClick={ekl}>bozuldu</button>
      <div>
        {todo.tarih}
      </div>
    </div>
  );
}

export default Ekle;
