import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import PageWrapper from './components/reusuables/PageWrapper';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [user, setUser] = useState(null)
  useEffect(()=>{
    const email = localStorage.getItem("email")
    if(email !== null || email !== undefined) {

      axios.get(`"http://localhost:8080/customer/findCustomerByEmail/${email}"`)
      .then((response) => {
        setUser(response.data)
      }).catch((error) => {
        console.log(error)
      })

    }
  }, [])

  return (
    <PageWrapper user={user} setUser={setUser}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
