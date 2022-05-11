import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login({isAuthenticated,setUser,setIsAuthenticated}) {

  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState([])
  function onSubmit(e){
    
      e.preventDefault()
      const user = {
        username: username,
        password
      }   

      fetch(`http://localhost:3000/login`,{
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
            window.location.replace("http://localhost:9000/Home")
            console.log("working?")
            navigate("/home")
          })
          console.log(isAuthenticated)
          console.log(user)
          
        } else {
          res.json()
          .then(json => setError(json.error))
        }
      })
  }
  return (

    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="/CreateAUser" className="font-medium text-pink-500 hover:text-pink-700" title="Create a">
              create an account here!
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="user-name" className="sr-only">
                User name
              </label>
              <input
                id="user-name"
                name="username"
                type="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="User Name"
                onChange={(event) =>setUsername(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(event) =>setPassword(event.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="text-sm">
              <a href="/CreateAUser" className="font-medium text-pink-500 hover:text-pink-700">
                Forgot your password?...create a new account!
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onSubmit}>
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Sign in
            </button>
          </div>
        </form>
        {error?<div>{error}</div>:null}
      </div>
    </div>
  )
}

export default Login;