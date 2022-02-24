import {BrowserRouter} from 'react-router-dom';
import { GlobalStyle } from "./global/GlobalStyle";
import { useState } from "react";
import { Button, TextField, List, ListItem, ListItemText } from "@mui/material";
import { Container, ListContainer } from "./style";

const App = () => {
  const [lista, setLista] = useState(localStorage.lista && localStorage.lista.split(','));
  const [input, setInput] = useState("");
  localStorage.lista = [...lista]
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    setLista([...lista, input]);
    setInput("");
  };
  const excluirItem = (index) => {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);
    setLista(tmpArray);
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Container>
      <GlobalStyle />
      <h1>O que vamos fazer hoje?</h1>
      <form onSubmit={formSubmit}>
        <TextField
          style={{ width: "100%" }}
          color="secondary"
          label="Tarefa"
          size="small"
          onChange={handleChange}
          value={input}
        />
        <Button
          variant="contained"
          color="success"
          onClick={input.length > 0 ? handleAdd : undefined}
        >
          Adicionar
        </Button>
      </form>
      <ListContainer>
        {lista &&
          lista.map((item, index) => (
            <List key={index}>
              <ListItem disablePadding style={{borderBottom: '2px solid #c0c0c069', padding: '2px'}}>
                <ListItemText
                  primary={item}
                  style={{ width: "100%", wordWrap: "break-word" }}
                />
                <Button
                  onClick={() => excluirItem(index)}
                  color="error"
                  variant="contained"
                  size="small"
                >
                  Excluir
                </Button>
              </ListItem>
            </List>
          ))}
      </ListContainer>
    </Container>
    </BrowserRouter>

  );
};

export default App;
