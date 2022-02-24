import { GlobalStyle } from "./global/GlobalStyle";
import { useState } from "react";
import {
        Button, 
        TextField,
        List,
        ListItem,
        ListItemText,
      } from '@mui/material'
import { DeleteIcon } from '@mui/icons-material'
import {Container, ListContainer} from './style'

const App = () =>{
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
    <Container>
      <GlobalStyle />
      <form onSubmit={formSubmit}>
        <TextField 
          size='small'
          onChange={handleChange} 
          value={input} 
          
          />
        <Button variant="contained" color="success" onClick={input.length > 0 && handleAdd}>Adicionar</Button>
      </form>
      <ListContainer>
        {lista &&
          lista.map((item, index) => (
          <List key={index}>
            <ListItem disablePadding>
              <ListItemText primary={item}/>
                <Button onClick={()=>excluirItem(index)} color='error' variant='contained' size='small'><DeleteIcon/></Button>
            </ListItem>
          </List>
          ))}
      </ListContainer>

    </Container>
  );
}

export default App;
