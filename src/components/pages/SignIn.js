import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import '../../css/components/signIn.css'
import Header from '../reusuables/Header'

const SignIn = () => {

    const navigator = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const userChangeHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...user };
        tempUser[name] = value;
        setUser(tempUser)
    }

    const submitHandler = () => {

        axios.post("http://localhost:8080/customer/signIn/", user)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem("email", response.data.email)
                navigator("/")
            })
            .catch((error) => {
                console.log(error)
                // do whatever on a failed response
            })

    }

    return (
        <div className='flex-row'>
            <div className='sign-up-box'>
                <label>Email</label>
                <input className="" name="email" value={user.email} type="text" placeholder="Email" onChange={userChangeHandler} />
                <label>Password</label>
                <input className="" name="password" value={user.password} type="password" placeholder="*****" onChange={userChangeHandler} />
                <button className="" onClick={submitHandler}>Submit</button>
            </div>
        </div>
    )

}

export default SignIn