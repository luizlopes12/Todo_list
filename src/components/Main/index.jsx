import React,{useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
const Main = () => {
  return (
    <>
    <h1>To do list</h1>
    <form action="#">
        <TextField id="outlined-basic" label="Tarefa" variant="outlined" />
    </form>
    </>
  )
}

export default Main