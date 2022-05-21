import "./aytem.css";
import React, { useState } from "react";

function Aytem({ veri, islem }) {
  const todo = veri.yapilacak;
  const [yapildiMi, setSt] = useState(veri.check);
  const checked = (e) => {
    setSt(!yapildiMi);
    islem(veri);
  };
  console.log(veri.alt)
  return (
    <div className="aytem">
      <div className="cbp">
        <input
          className="cBox"
          type="checkbox"
          value={yapildiMi}
          defaultChecked={yapildiMi}
          onChange={checked}
        ></input>
        
        <h4
          className="yazi"
          style={{ textDecoration: yapildiMi ? "line-through" : "none" }}
        >
          {todo} {yapildiMi && "yapıldı"}
        </h4>
      </div>
      <button
        className="btn"
        onClick={() => {
          alert("vxcvxc");
        }}
      ></button>
      
    </div>
  );
}
function tarih(gelen, fonskiyon) {
  //todo'lardaki tarihlerin unique listesi
  const unq = gelen
    .map((a) => a.tarih)
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort((a, b) => new Date(a) - new Date(b));
  //console.log(unq)
  const mp = [];
  unq.forEach((element) => {
    const gun = gelen
      .filter((e) => e.tarih === element)
      .map((el) => <Aytem veri={el} islem={fonskiyon} />);
    mp.push(
      <div className="gun">
        <div>{new Date(element).toLocaleDateString()}</div>
        <div className="isler">{gun}</div>
      </div>
    );
  });
  return mp;
}

function Tarihler({ veri, islem }) {
  //state aktarma uğraşı
  const trhList = tarih(veri, islem);
  // const gunlukYapilcak = props.yapilcaklar;
  return <div>{trhList}</div>;
}

export { Aytem, Tarihler };
