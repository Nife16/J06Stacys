import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/sign-up' element={<SignUp />}/>
      <Route path='/sign-in' element={<SignIn />}/>
    </Routes>
  );
}

export default App;
