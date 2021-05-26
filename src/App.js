import React,{useState} from 'react';
import './App.css';
import Todo from './Todo';
import { Button } from '@material-ui/core';
import { FormControl,Input,InputLabel } from '@material-ui/core';



function App() {

  const[todos,settodos]=useState([]);
  const[input,setinput]=useState(['']);
  const addtodo= (event=>{
    event.preventDefault(); 
    settodos([...todos,input]);
    setinput('');
  })
  return (
    <div className="App">
      <div>
        <h1> TODO LIST</h1>
      </div>
      <div>
      <form>
      <FormControl>
        <InputLabel > Write a text</InputLabel>
      <Input className="input" type="text" placeholder="entrer text" value={input} onChange={event=>setinput(event.target.value)}/>
        
       
      </FormControl>
      
      <Button disabled={!input}type="submit" onClick={addtodo} variant="contained" color="primary">
         Add
      </Button>
      
      </form>
      </div>
     
      
      <div>
        <ul>
          {todos.map(todo =>(
            <Todo text={todo}/>
           
          ))}
        </ul>
      </div>   
    </div>
  );
}

export default App;
