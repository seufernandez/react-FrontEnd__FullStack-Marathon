import React from 'react';
import Header from './components/Header'

function App(){
    return (
        <>
            <Header title = "ReactJs">
                <ul>
                    <li>Projects</li>
                    <li>Github</li>
                </ul>
            </Header>
            <Header title = "About Me">
                <ul>
                    <li>Projects</li>
                    <li>Github</li>
                    <li>Login</li>
                </ul>
            </Header>
        </>
    )
}

export default App;