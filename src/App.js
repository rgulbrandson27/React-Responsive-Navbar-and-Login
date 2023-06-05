import React from 'react'
import NavBar from './components/NavBar/NavBar';
import Nav from './components/NavBar/Nav';
import NavMobile from './components/NavBar/NavMobile';
import NavLinks from './components/NavBar/NavLinks';
import LoginForm from './components/LoginForm/LoginForm';



const App = () => {
    return (
        <div className="App">
            <NavBar/>
            <LoginForm/>
         </div>
    );
}

export default App