import React, {useState} from 'react'
import userData from '../../users';
import './Auth.css'
function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = (e)=>{
    e.preventDefault();
    if(username === '' || password === ''){
      alert('Please enter all the fields');
      return;
    }
    let user = userData.find((user)=>{
      return user.username === username && user.password === password;
    })
    if(user){
      alert('Login successful');
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = '/';
    }
  }
  return (
    <div>
      <div className="login">
        <div className="loginContainer">
          <form onSubmit={loginUser}>
            <label>Username</label> <br />
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter username..." /> <br />
            <label>Password</label> <br />
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter password..." /> <br />
            <button type='submit' className="loginButton">Login</button> <br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login