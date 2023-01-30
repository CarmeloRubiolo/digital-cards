import "./CuentaRegresiva.css"
import React, { useState, useRef, useEffect } from "react"


const CuentaRegresiva = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('May 10, 2023 18:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / ( 1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            if (distance < 0) {
                clearInterval(interval.current);

            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
        
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    })






    return (
        <>
        <div className="container-flex">
            <div className="cr-container">
                <div className="p-1">
                    <div >Días</div>
                    <div>{timerDays}</div>
                </div>
                <div className="p-1">
                    <div>Horas</div>
                    <div>{timerHours}</div>
                </div>
                <div className="p-1">
                    <div>Minutos</div>
                    <div>{timerMinutes}</div>
                </div>
                <div className="p-1">
                    <div>Segundos</div>
                    <div>{timerSeconds}</div>
                </div>
            </div>
            <img className="img-fluid img-cr" src="../../../imagenes/Minions.png" alt="hombreAraña" /> 
        </div>
               
        </>
    )
}
export default CuentaRegresiva