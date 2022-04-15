import { margin } from '@mui/system';
import { useState } from 'react'
import './login.css'
import Image from "./nustBG.png";


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json()
    
    if (data.user) {
      alert('Login Successfull')
      window.location.href = '/dashboard'
    } else {
      alert('check username and password')
    }
  }

  return (

    <div style={{backgroundColor:"#212121" ,height:1000,width:5000,top:0,position:"fixed",
    backgroundImage: "url(" + Image + ")"}}>

<div style={{marginTop:350,marginLeft:600 }}>
      <h1 style={{color:"black"}}>Login</h1>
      <form onSubmit={loginUser}>
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          placeholder="Email" 
        />
        <br />
        <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" 
          placeholder="Password" 
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>



    </div>
    
  )
}
 
export default App;