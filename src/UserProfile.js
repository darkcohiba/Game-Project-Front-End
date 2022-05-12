import { useState } from "react"
import Header from "./Header"

export default function UserProfile ({setUser, user}) {

    const [username, setUserName] = useState('')
    const [errors, setErrors] = useState([])
    
    console.log(user)

    function onSubmit(e){
        const id = user.id
        e.preventDefault()
        const newUserName = {
            username: username,
        }
        fetch(`http://localhost:3000/users/${id}`,{
          method:'PATCH',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(newUserName)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(user=>{
              setUser(user)
            })
          } else {
            res.json()
            .then(json => setErrors(json.errors))
          }
        })
    }

    return(
        <>
            <Header/>
            <div className="flex">
                <div className="text-xl font-bold">
                    `Welcome back, {user}!`
                </div>
                <div className="align-center justify-center">
                    <form>
                        <input
                            id="userName"
                            name="username"
                            type="username"
                            required
                            className=""
                            placeholder="User Name"
                            onChange={(event) =>setUserName(event.target.value)}
                        />
                        <div className="bg-pink-500">
                        <button
                            type="submit"
                            className="rounded-full bg-pink-100 hover:bg-pink-300 w-40 h-6" onClick={onSubmit}>
                            Update Username
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}