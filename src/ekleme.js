
function Ekle(props) {
  const date=new Date();
  const todo = {
    id:"",
    yapilcak:"gfd",
    tarih:date.toLocaleDateString(),
    check:false
  };
  
  const yazdir = () => console.log(todo.tarih + " " + todo.yapilcak);
  return (
    <div>
      <input
        type="datetime-local"
        onChange={(e) => tdate(e,todo)}
      />
      <input type="text" onChange={(e) => tcont(e,todo)} />
      
      <button onClick={tekle(props.veri,todo)}>bozuldu</button>
    </div>
  );
}

function tekle(vtb,td){
  td.id=vtb.length+1;
  vtb.push(td);
}
function tdate(e,td){
  td.tarih=e.target.value;
}
function tcont(e,td){
  td.yapilcak=e.target.value;

}
export default Ekle;
