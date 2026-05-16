import { useState, useEffect } from 'react';
import {Hello} from './components/Hello.jsx';


function App() {

    // inicializei um estado com o valor inicial false
    // desconstrucao de array
    const [userState, setUserState] = useState(false);
    // neste momento, userState está com valor false


    // useEffect permite controlar/detectar o ciclo de vida de um componente
    useEffect(()=>{
        console.log("O componente foi montado");
    }, []); // [] = array vazio é o onLoad do componente
    // dispara uma função quando muda o valor de userState
    useEffect(()=>{
        console.log("O estado do usuario mudou para: ", userState)
    },[userState]);


    /*
    setTimeout(function(){
        // estou logando meu usuário
        setUserState(true);
    }, 5000); 
    */

    return <Hello setUserState={setUserState} isLogged ={userState} username="Joao" />;
}

export default App
