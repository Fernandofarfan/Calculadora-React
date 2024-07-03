import { useState, useRef } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [resultado, setResultado] = useState(0); 
 
  function sumar(e) { 
    e.preventDefault(); 
    setResultado((resultado) => resultado + Number(inputRef.current.value)); 
  }; 
 
  function restar(e) { 
    e.preventDefault();
    setResultado((resultado) => resultado - Number(inputRef.current.value));
  };

  function multiplicar(e) { 
    e.preventDefault();
    setResultado((resultado) => resultado * Number(inputRef.current.value));
  }; 
 
  function dividir(e) { 
    e.preventDefault();
    setResultado((resultado) => resultado / Number(inputRef.current.value));
  };
 
  function resetearInput(e) { 
    e.preventDefault();
    inputRef.current.value = "";
  }; 
 
  function resetearResultado(e) { 
    e.preventDefault();
    setResultado(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Calculadora más simple</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>
          {resultado}
        </p> 
        <input
          pattern="[0-9]*" 
          ref={inputRef} 
          type="number" 
          placeholder="Introduce un número" 
        /> 
        <button onClick={sumar}>sumar</button> 
        <button onClick={restar}>restar</button>
        <button onClick={multiplicar}>multiplicar</button>
        <button onClick={dividir}>dividir</button>
        <button onClick={resetearInput}>resetear entrada</button>
        <button onClick={resetearResultado}>resetear resultado</button>
      </form> 
    </div> 
  ); 
} 
 
export default App;
