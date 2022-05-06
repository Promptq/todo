import "./aytem.css";
import React, { useState } from "react";

function Aytem(props) {
  const tVeri = props.veri;

  const todo = tVeri.yapilacak;
  const [yapildiMi, setSt] = useState(tVeri.check);

  return (
    <div className="aytem">
      <p
        className="yazi"
        style={{ textDecoration: yapildiMi ? "line-through" : "none" }}
      >
        {todo} {yapildiMi && "yapıldı"}
      </p>
      <div>
        <button
          className="btn"
          onClick={() => {
            alert("vxcvxc");
          }}
        ></button>
        <input
          className="cBox"
          type="checkbox"
          value={yapildiMi}
          defaultChecked={yapildiMi}
          onChange={() => setSt(!yapildiMi)}
        ></input>
      </div>
    </div>
  );
}
function tarih(gelen) {
  //todo'lardaki tarihlerin unique listesi
  const unq = gelen
    .map((a) => a.tarih)
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort((a, b) => Date(b) - Date(a));
  const mp = [];
  unq.forEach((element) => {
    const gun = gelen
      .filter((e) => e.tarih === element)
      .map((el) => <Aytem veri={el} />);
    mp.push(
      <div className="gun">
        <div>{new Date(element).toDateString()}</div>
        <div className="isler">{gun}</div>
      </div>
    );
  });
  return mp;
}

function Tarihler(props) {
  const trhList = tarih(props.veri);
  // const gunlukYapilcak = props.yapilcaklar;
  return <div>{trhList}</div>;
}

export { Aytem, Tarihler };
