import "./aytem.css";
import React, { useState } from "react";

function Todo({ veri, check, parcaCheck, sil }) {
  const todo = veri.yapilacak;
  const [yapildiMi, setSt] = useState(veri.check);
  const parcalar = veri.parca;
  const checked = (e) => {
    setSt(!yapildiMi);
    check(veri);
  };
  const parcaListesi = [];
  const [genislet, setGenisle] = useState(true);
  if (veri.parca !== undefined) {
    parcalar.forEach((element) => {
      parcaListesi.push(
        <Parca parent={veri} parca={element} check={parcaCheck} />
      );
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
                autoFocus={true}
                onKeyUp={(e) => {
                  veri.yapilacak = e.target.value;
                  if (e.key === "Enter") {
                    if (e.target.value !== "") setEdit(!edit);
                  }
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
                sil(veri);
              }}
            >
              Sil
            </button>
            {parcaListesi.length > 0 ? (
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
        {parcaListesi}
      </div>
    </div>
  );
}

function Parca({ parent, parca, check }) {
  const [check1, setCheck] = useState(parca.check);

  const b = () => {
    check(parent, parca);
    setCheck(!check);
  };
  const [edit, setEdit] = useState(true);

  return (
    <div className="parca">
      <div className="cbp">
        <input type="checkbox" onChange={b} defaultChecked={check1}></input>
        {edit ? (
          <p style={{ textDecoration: check1 ? "line-through" : "none" }}>
            {parca.yapilacak}
          </p>
        ) : (
          <input
            autoFocus={true}
            defaultValue={parca.yapilacak}
            onKeyUp={(e) => {
              console.log(e.target.value);
              parca.yapilacak = e.target.value;
              if (e.key === "Enter") {
                if (e.target.value !== "") setEdit(!edit);
              }
            }}
          ></input>
        )}
      </div>
      <div>
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
function Gun({ tarih, icerik }) {
    const trh = new Date(tarih);
    const bugun = new Date(Date.now());
    const bgnMu = trh.toLocaleDateString() === bugun.toLocaleDateString();
    const fark = Math.ceil((trh - bugun) / (1000 * 60 * 60 * 24));
    var yazz = "Bugün";
    if (fark > 0) {
      yazz = " Gün Sonra";
    } else if (fark < 0) {
      yazz = " Gün Önce";
    }
    const valid = trh.toDateString() !== "Invalid Date" ? true : false;

    return (
      <div className={bgnMu ? "bugun" : "gun"}>
        <div className="div">
          {valid ? (
            <>
              <div>{trh.toLocaleDateString()}</div>
              <div>{fark !== 0 ? Math.abs(fark) + yazz : yazz}</div>
            </>
          ) : null}
        </div>
        <div className="isler">{icerik}</div>
      </div>
    );
  }
function Tarihler({ veri, check, parcaCheck, sil }) {
  const uniqueTarih = veri
    .map((a) => a.tarih)
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort((a, b) => new Date(a) - new Date(b));
  const mp = [];
  uniqueTarih.forEach((element) => {
    const gun = veri
      .filter((e) => e.tarih === element)
      .map((el) => (
        <Todo veri={el} check={check} parcaCheck={parcaCheck} sil={sil} />
      ));
    mp.push(<Gun tarih={element} icerik={gun} />);
  });
  
  return <div>{mp}</div>;
}

export { Tarihler };
