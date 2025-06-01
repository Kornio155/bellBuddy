import Zegar from './zegar.tsx';
import Lista from './lista.tsx';
import './App.css';
import {useState} from "react";

function App() {
    const [showClock, setShowClock] = useState(true);
    return (
        <>
            <center>
                <h1>Strona do sprawdzania obecności</h1>
                <button onClick={() => setShowClock(prev => !prev)} id={"button"}>
                    {showClock ? 'Ukryj zegar' : 'Pokaż zegar'}
                </button>
                {showClock && <Zegar />}
                <Lista />
            </center>
        </>
    );
}

export default App;
