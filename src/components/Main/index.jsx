import React,{useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Main = () => {
  return (
    <>
    <h1>To do list</h1>
    <form onSubmit={(e)=>e.preventDefault()}>
        <TextField id="outlined-basic" label="Tarefa" variant="outlined"/>
        <Button  variant='outlined'>Adicionar</Button>
    </form>

    </>
  )
}

export default Main