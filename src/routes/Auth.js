import React, {useState} from 'react'

const useForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChange = (event) => {
        const {target} = event

        if(target.name == "email"){
            setEmail(target.value)
        }
        else if(target.name == "password"){
            setPassword(target.value)
        }
    }

    const onSubmit = (event) =>{
        event.preventDefault()
    }
    
    return {email, password, onChange, onSubmit}
}


const Auth = () => {
    const  {email, password, onChange, onSubmit} = useForm()
    return(
        <div>
            <h1>Auth Page</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} name="email" value={email} type="text" placeholder='Email' required></input>
                <input onChange={onChange} name="password" value={password} type="password" placeholder='Password' required></input>
                <input type="submit" value="Log In"></input>
            </form>
            <button>continue with google </button>
            <button>continue with github </button>
        </div>
    )
}

export default Auth