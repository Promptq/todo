import "./aytem.css";
import React, { useState } from "react";

function Aytem({ veri, islem, altIslem, sil }) {
  const todo = veri.yapilacak;
  const [yapildiMi, setSt] = useState(veri.check);
  const altt = veri.alt;
  const checked = (e) => {
    setSt(!yapildiMi);
    islem(veri);
  };
  const alt = [];
  const [genislet, setGenisle] = useState(true);
  if (veri.alt !== undefined) {
    altt.forEach((element) => {
      alt.push(<Alt veri={veri} altVeri={element} fonk={altIslem} sil={sil} />);
    });
  }
  const [edit, setEdit] = useState(true);
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
          <div className="yazi">
            {edit ? (
              <h4
                style={{ textDecoration: yapildiMi ? "line-through" : "none" }}
              >
                {todo}
              </h4>
            ) : (
              <input
                type="text"
                defaultValue={todo}
                autoFocus="true"
                onKeyUp={(e) => {
                  veri.yapilacak = e.target.value;
                  if (e.key === "Enter") setEdit(!edit);
                }}
              ></input>
            )}
          </div>
        </div>
        <div className="butonlar">
          <button
            onClick={() => {
              setEdit(!edit);
            }}
          >
            Edit
          </button>
          <div>
            <button
              className="btn"
              onClick={(e) => {
                console.log(e.target.value);
                sil(veri, "ust");
              }}
            >
              Sil
            </button>
            {alt.length > 0 ? (
              <button
                className="btn"
                onClick={() => {
                  setGenisle(!genislet);
                }}
              >
                v
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="alt" style={{ display: genislet ? "none" : "block" }}>
        {alt}
      </div>
    </div>
  );
}

function Alt(props) {
  const [chc, setChc] = useState(props.altVeri.check);

  const b = () => {
    props.fonk(props.veri, props.altVeri);
    setChc(!chc);
  };
  const [edit, setEdit] = useState(true);

  return (
    <div className="altItem">
      <div className="cbp">
        <input
          type="checkbox"
          onChange={b}
          defaultChecked={props.altVeri.check}
        ></input>
        {edit ? (
          <p style={{ textDecoration: chc ? "line-through" : "none" }}>
            {props.altVeri.yapilacak}
          </p>
        ) : (
          <input
            id="in"
            onKeyUp={(e) => {
              console.log(e.target.value);
              props.altVeri.yapilacak = e.target.value;
              if (e.key === "Enter") {
                if (e.target.value !== "") setEdit(!edit);
              }
            }}
          ></input>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() => {
            setEdit(!edit);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

function Tarihler({ veri, islem, altIslem, sil }) {
  const unq = veri
    .map((a) => a.tarih)
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort((a, b) => new Date(a) - new Date(b));
  //console.log(unq)
  const mp = [];
  unq.forEach((element) => {
    const gun = veri
      .filter((e) => e.tarih === element)
      .map((el) => (
        <Aytem veri={el} islem={islem} altIslem={altIslem} sil={sil} />
      ));
    mp.push(<Gun tarih={element} icerik={gun} />);
  });
  function Gun({ tarih, icerik }) {
    const deneme = new Date(tarih).toLocaleDateString();
    const bgnMu = new Date(Date.now()).toLocaleDateString() === deneme;

    return (
      <div className={bgnMu ? "bugun" : "gun"}>
        <div>{deneme !== "Invalid Date" ? deneme : null}</div>
        <div className="isler">{icerik}</div>
      </div>
    );
  }
  return <div>{mp}</div>;
}

export { Aytem, Tarihler };
