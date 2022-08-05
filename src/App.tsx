import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Greet';
import { Persons } from './Persons';
import { Heading } from './Heading';
import { Oscar } from './Oscar';
import { Button } from './Button';
import { Input } from './Input';
import { Container } from './Container';
function App() {

  const personName ={
    first:'Emily',
    last:'Rain',
  }
  return (
    <div className="App">
      <header className="App-header">
        <Greet name='Shubhangini' messageCount={20} isLoggedIn={true}/>
        <Persons name ={personName}/>
        <Oscar>
        <Heading> Placeholder Text</Heading>
        </Oscar>
        <Container  styles={{border:'1px solid white',padding:'1rem'}}/>
        <Button handleClick={()=>{
          console.log('Button Clicked')
        }}/>
        <Input value=''handleChange={(event)=>console.log(event)}/>
       </header>
    </div>
  );
}

export default App;
