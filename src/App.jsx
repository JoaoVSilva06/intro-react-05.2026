import { useState } from 'react';
import {Hello} from './components/Hello.jsx';


function App() {
    // inicializei um estado com o valor inicial false
    // desconstrucao de array
    const [userState, setUserState] = useState(false);
    // neste momento, userState está com valor false

    /*
    setTimeout(function(){
        // estou logando meu usuário
        setUserState(true);
    }, 5000); 
    */

    return <Hello setUserState={setUserState} isLogged ={userState} username="Joao" />;
}

export default App
