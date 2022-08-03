import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Select from "./components/Select/Select";
import Chart from "./components/Chart/Chart";

function App() {
    const [ticket, setTicket] = useState(null);
    const [messages, setMessages] = useState([]);
    const webSocket = useRef(null);

    useEffect(() => {
        if (ticket === null) {
            return;
        }
        setMessages([]);
        webSocket.current = new WebSocket(`ws://127.0.0.1:100/ws/${ticket}`);
        webSocket.current.onmessage = (message) => {
            const preparedData = message.data;
            const maxCount = 20;
            setMessages(prevState => [...prevState.slice(-20), {uv: preparedData}]);
        };
        return () => webSocket.current.close();
    }, [ticket]);

    return (
        <div className={'container'}>
            <Select setTicket={setTicket}/>
            <Chart rank={messages}/>
        </div>
    );
}

export default App;