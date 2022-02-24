import { GlobalStyle } from "./global/GlobalStyle";
import { useEffect, useState } from "react";
import {
        Button, 
        TextField,
        List,
        ListItem,
        ListItemText,
      } from '@mui/material'
import {Container, ListContainer} from './style'

const App = () =>{
  const [lista, setLista] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
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
    <Container>
      <GlobalStyle />
      <h1>O que vamos fazer hoje?</h1>
      <form onSubmit={formSubmit}>
        <TextField 
          style={{width: '100%'}}
          label="Tarefa"
          size='small'
          onChange={handleChange} 
          value={input} 
          />
        <Button
         variant="contained"
          color="success"
          onClick={input.length > 0 ? handleAdd : undefined}
          onKeyPress={(e) =>(e.key == 'Enter' && handleAdd)}
          >Adicionar</Button>
      </form>
      <ListContainer>
        {lista &&
          lista.map((item, index) => (
          <List key={index}>
            <ListItem disablePadding>
              <ListItemText primary={item} style={{width: '100%', wordWrap: 'break-word'}}/>
                <Button onClick={()=>excluirItem(index)}  color='error' variant='contained' size='small'>Excluir</Button>
            </ListItem>
          </List>
          ))}
      </ListContainer>

    </Container>
  );
}

export default App;
