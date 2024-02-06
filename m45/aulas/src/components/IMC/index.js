import React, {useState} from 'react'
import './style.css'

function IMC () {

    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [imc, setImc] = useState(0)

    function calculator () {
      setImc(parseFloat(weight / ( height * height )))
      console.log(imc)
    }

    return (
        <div className='IMC'>
            <h2>Cálculo IMC</h2>

            <input 
                type='text' 
                placeholder='digite seu peso' 
                value={weight}
                onChange={ e => setWeight(e.target.value)}
            />

            <input 
                type='text' 
                placeholder='digite sua altura'
                value={height} 
                onChange={ e => setHeight(e.target.value)}
            />

            <button onClick={calculator}>Calcular</button>

            <p>Resultado: {imc}</p>
        </div>
    )

}

export default IMC