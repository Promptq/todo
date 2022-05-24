import "./aytem.css";
import React, { useState } from "react";

function Aytem({ veri, islem, altIslem }) {
  const todo = veri.yapilacak;
  const [yapildiMi, setSt] = useState(veri.check);
  const checked = (e) => {
    setSt(!yapildiMi);
    islem(veri);
  };
  const alt = [];
  const [genislet, setGenisle] = useState(false);
  if (veri.alt !== undefined) {
    veri.alt.forEach((element) => {
      alt.push(<Alt veri={veri} altVeri={element} fonk={altIslem}/>);
      
    });
    
  }
  return (
    <div className="aytem">
      <div className="dis">
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
        {alt.length>0?<button
          className="btn"
          onClick={() => {
            setGenisle(!genislet);
          }}
        ></button>:null}
      </div>
      <div className="alt" style={{ display: genislet ? "block" : "none" }}>
        {alt}
      </div>
    </div>
  );
}

function Alt(props) {
  const b=()=>{
    props.fonk(props.veri,props.altVeri)
  }
  return (
    <div className="altItem">
      <input type="checkbox" onChange={b} defaultChecked={props.altVeri.check}></input>
      <p>{props.altVeri.yapilacak}</p>
    </div>
  );
}

function tarih(gelen, fonskiyon,altIslem) {
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
      .map((el) => <Aytem veri={el} islem={fonskiyon} altIslem={altIslem}/>);
    mp.push(
      <div className="gun">
        <div>{new Date(element).toLocaleDateString()}</div>
        <div className="isler">{gun}</div>
      </div>
    );
  });
  return mp;
}

function Tarihler({ veri, islem,altIslem }) {
  //state aktarma uğraşı
  const trhList = tarih(veri, islem,altIslem);
  // const gunlukYapilcak = props.yapilcaklar;
  return <div>{trhList}</div>;
}

export { Aytem, Tarihler };
