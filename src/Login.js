import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Login({setUser,setIsAuthenticated}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
 
  const [error, setError] = useState([])

  function onSubmit(e){
      e.preventDefault()
      const user = {
          username: username,
          password
      }
     
      fetch(`/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => {
        if(res.ok){
          res.json()
          .then(user=>{
            setUser(user)
            setIsAuthenticated(true)
            window.location.replace("http://localhost:3000/Home")
          })
          
        } else {
          res.json()
          .then(json => setError(json.error))
        }
      })
  }
  return (
      <> 
      
      <form className="flex justify-center"onSubmit={onSubmit}>
        <h1>Login</h1>
        <label>Username<input className="border-2 w-100 h-10 bg-slate-400" type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></label>
        <label>Password<input type="password" className="border-2 w-100 h-10 bg-slate-400" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
        <button type="submit" value="Login!" className="bg-teal-200 w-100 h-10 border-2">Login!</button>
      </form>
    {error?<div>{error}</div>:null}
    <Link to="/CreateAUser" > Sign up Here!</Link>
    </>
  )
}

export default Login;