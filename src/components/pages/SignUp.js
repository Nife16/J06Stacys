import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import '../../css/components/signUp.css'
import Header from '../reusuables/Header'

const SignUp = () => {

    const navigator = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        age: 0,
        telephone: ""
    })

    const userChangeHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...user };
        tempUser[name] = value;
        setUser(tempUser)
    }

    const submitHandler = () => {

        axios.post("http://localhost:8080/customer/signUp", user)
            .then((response) => {
                navigator('/sign-in')
            })
            .catch((error) => {
                console.log(error)
                // do whatever on a failed response
            })

    }

    return (
        <div className='flex-row'>
            <div className='sign-up-box'>
                <label>Name</label>
                <input className="" name="firstName" value={user.firstName} type="text" placeholder="Name" onChange={userChangeHandler} />
                <label>Email</label>
                <input className="" name="email" value={user.email} type="text" placeholder="Email" onChange={userChangeHandler} />
                <label>Password</label>
                <input className="" name="password" value={user.password} type="password" placeholder="*****" onChange={userChangeHandler} />
                <button className="" onClick={submitHandler}>Submit</button>
            </div>
        </div>
    )

}

export default SignUp