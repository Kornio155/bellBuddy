import { useEffect, useState } from 'react';

function Zegar() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString();

    return (
        <div style={{ fontSize: '2rem', fontFamily: 'monospace' }}>
            🕒 {formattedTime}
        </div>
    );
}

export default Zegar;
