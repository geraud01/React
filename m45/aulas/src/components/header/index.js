import React, { useState } from 'react'
import logo from './../../logo.svg'

function Header(props) {

    const [count, setCount] = useState(1);

    function increaseCount() {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <header>
            <h1>{props.title}</h1>
            <img src={logo} height={100} width={100} />
            <p>Bem vindo(a)! Pela {count} vez</p>
            <button onClick={increaseCount}>retornar</button>
        </header>
    )
}

export default Header