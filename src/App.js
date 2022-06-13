import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function App() {
  const [username,setUserName]= useState("");
  const [Password,setPassword]= useState("");
  const [ConfirmPassword,setConfirmPassword]= useState("");
 // console.log("the user name is",username);
  console.log("the password is",Password);
  const onsubmitclick= (e) =>{
    console.log("the user name is :",username);
  }
  return (
    <div className='formcomponents-centred'>
      <div className='text-alligned'>
        <h1>Create User</h1>
      </div>
      <div className='component-maxwidth' className='text-alligned'>
        <Form.Label htmlFor='UserName'>User Name</Form.Label>
        <Form.Control type='text' onChange={(e) => {setUserName(e.target.value);}} value={username} id='UserName' />
      </div>
      <div className='component-maxwidth' className='text-alligned'>
        <Form.Label htmlFor='Password'>Password</Form.Label>
        <Form.Control type='text' onChange={(e) => {setPassword(e.target.value);}} value={Password} id='Password' />
      </div>
      <div className='component-maxwidth' className='text-alligned'>
        <Form.Label htmlFor='confirmPassword'>ConfirmPassword</Form.Label>
        <Form.Control type='text' onChange={(e) => {setConfirmPassword(e.target.value);}} value={ConfirmPassword} id='ConfirmPassword' />
      </div>
      <div className='center'>
        <button variant='primary' onClick={(e) => {onsubmitclick(e.target.value)}}>create account</button>
      </div>
    </div>
  
    
  );
}

export default App;
