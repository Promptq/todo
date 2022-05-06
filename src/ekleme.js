
function Ekle(props) {
  const todo = {};
  
  const yazdir = () => console.log(todo.tarih + " " + todo.yapilcak);
  return (
    <div>
      <input
        type="datetime-local"
        onChange={(e) => (todo.tarih = e.target.value)}
      />
      <input type="text" onChange={(e) => (todo.yapilcak = e.target.value)} />
      <p>
        {todo.tarih} {todo.yapilcak}
      </p>
      <button onClick={yazdir} />
    </div>
  );
}
export default Ekle;
