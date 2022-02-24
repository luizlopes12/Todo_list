import { GlobalStyle } from "./global/GlobalStyle";
import { useState } from "react";
function App() {
  const [lista, setLista] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const handleAdd = () => {
    setLista([...lista, input]);
    setInput("");
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };
  const excluirItem = (index) => {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);
    setLista(tmpArray);
  };
  return (
    <>
      <GlobalStyle />
      <form onSubmit={formSubmit}>
        <input onChange={handleChange} value={input} />
        <button onClick={handleAdd}>Adicionar</button>
      </form>
      <ul>
        {lista &&
          lista.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={()=>excluirItem(index)}>Excluir</button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
