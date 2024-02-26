/** @format */

import { useState } from "react";

function App() {
  // setTimeout ocorre apenas uma vez no periodo de tempo
  // setTimeout(() => {
  //   alert();
  // }, 3000);

  // setInterval executa repetidamente a cada periodo de tempo

  // setInterval(() => {
  //   console.log("bom diaa!");
  // }, 3000);

  //clearInterval serve para parar as execuções
  //clearInterval();

  //* Utilizando o setTimeout exiba uma mensagem após 2 segundos

  //* Utilizando o setInterval exiba uma mensagem no console a cada 3 segundos

  //* Crie um contador que conte de 2 em 2 atravez de um click e não passe do numero 10

  // const [numero, setNumero] = useState(0);

  // function adicionar() {
  //   if (numero < 10) {
  //     setNumero(numero + 1);
  //   }
  // }

  // iniciar o relogio
  const [valor, setValor] = useState(0);

  //Parar
  const [pare, setPare] = useState();

  //Função start
  function start() {
    const time = setInterval(() => {
      setValor((valor) => valor + 1);
    }, 1000);

    setPare(time);
  }

  //Função stop
  function stop() {
    clearInterval(pare);
  }

  // Função reset
  function reset() {
    setValor(0);
  }

  return (
    <>
      <h2>Tempo: {valor}</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
