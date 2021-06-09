import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import './horlogeStyle.css';

export default function Horloge() {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(
            () => setValue(new Date()),
            1000
        );

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="horloge m-4">
            <Clock value={value} />
        </div>
    )
}