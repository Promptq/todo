import "./aytem.css";
import React, { useState } from "react";

function Aytem({ veri, islem, altIslem,sil }) {
  const todo = veri.yapilacak;
  const [yapildiMi, setSt] = useState(veri.check);
  const checked = (e) => {
    setSt(!yapildiMi);
    islem(veri);
  };
  const alt = [];
  const [genislet, setGenisle] = useState(true);
  if (veri.alt !== undefined) {
    veri.alt.forEach((element) => {
      alt.push(<Alt veri={veri} altVeri={element} fonk={altIslem} />);
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
          <div>
            {edit ? (
              <h4
                className="yazi"
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
            <button className="btn" onClick={(e)=>{console.log(e.relatedTarget);sil(veri)}}>Sil</button>
            {alt.length > 0 ? (
              <button
                className="btn"
                onClick={() => {
                  setGenisle(!genislet);
                }}
              >v</button>
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
  const [chc,setChc]=useState(props.altVeri.check)
  const b = () => {
    props.fonk(props.veri, props.altVeri);
    setChc(!chc)
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
          <p style={{textDecoration:chc?"line-through":"none"}}>{props.altVeri.yapilacak}</p>
        ) : (
          <input
            id="in"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                props.altVeri.yapilacak = e.target.value;
                setEdit(!edit);
              }
            }}
          ></input>
        )}
      </div>
      <button
        onClick={() => {
          setEdit(!edit);
        }}
      >
        Edit
      </button>
    </div>
  );
}

function Tarihler({ veri, islem, altIslem,sil }) {
  const unq = veri
    .map((a) => a.tarih)
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort((a, b) => new Date(a) - new Date(b));
  //console.log(unq)
  const mp = [];
  unq.forEach((element) => {
    const gun = veri
      .filter((e) => e.tarih === element)
      .map((el) => <Aytem veri={el} islem={islem} altIslem={altIslem} sil={sil}/>);
    mp.push(
      <div className="gun">
        <div>{new Date(element).toLocaleDateString()}</div>
        <div className="isler">{gun}</div>
      </div>
    );
  });
  
  return <div>{mp}</div>;
}

export { Aytem, Tarihler };
