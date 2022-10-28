import axios from 'axios'
import { useEffect, useState } from 'react'
import '../../css/components/home.css'
import Header from '../reusuables/Header'
import LoadingSpinner from '../reusuables/LoadingSpinner'

const Home = (props) => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const email = localStorage.getItem("email")
        if(email !== null || email !== undefined) {


            axios.get(`http://localhost:8080/customer/findCustomerByEmail/${email}`)
            .then((response) => {

                setUser(response.data)
                setIsLoading(false)

            }).catch((error)=> {
                console.log(error)
                setIsLoading(false)
            })
        }
    }, [])

    const renderContent = () => {

        if(isLoading) {
            // render a loading spinnerzZ
            return (
                <LoadingSpinner />
            )
        } else {
            return (<div>Hi {user.firstName}</div>)
        }
        
    }

    return (
        <div className='flex-col page-container'>
            {renderContent()}
        </div>
    )

}

export default Home