

export default function UserProfile ({isAuthenticated,setUser,setIsAuthenticated, user}) {

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name: username,
            // email,
            // password
        }
        fetch(`http://localhost:3000/users`,{
          method:'PATCH',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(user=>{
              setUser(user)
              setIsAuthenticated(true)
            })
          } else {
            res.json()
            .then(json => setErrors(json.errors))
          }
        })
    }

    return(
        <>
            <div>
                Welcome back, `${user}!`
            </div>
            <form>
                <div>
                    <label htmlFor="user-name" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="userName"
                        name="username"
                        type="username"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="User Name"
                        onChange={(event) =>setUserName(event.target.value)}
                    />
                </div>
                <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onSubmit}>
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    </span>
                    Update Username
                </button>
                </div>
            </form>
        </>
    )
}