import React,{useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Main = (props) => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const handleChange = (e) =>{
    setInput(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    }
    )
    setInput('')
  }
  return (
    <>
    <h1>What's the plan for today?</h1>
    <form onSubmit={handleSubmit}>
        <TextField 
          id="outlined-basic" 
          label="Tarefa" 
          variant="outlined"
          value={input}
          onChange={handleChange}
          />
        <Button variant='outlined'>Adicionar</Button>
    </form>

    </>
  )
}

export default Main