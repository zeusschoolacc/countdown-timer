import { useState } from 'react'
import Board from './components/Board'
import InputContainer from './components/InputContainer'
import './styles/tailwind.css'

function App() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const handleChangeHour = (hours) => {
    setTime(prev => {
      return {
        ...prev,
        hours
      }
    })
  }

  const handleChangeMinute = (minutes) => {
    setTime(prev => {
      return {
        ...prev,
        minutes
      }
    })
  }

  const handleChangeSecond = (seconds) => {
    setTime(prev => {
      return {
        ...prev,
        seconds
      }
    })
  }

  const handleCountdown = (setStartTimer) => {
    setTime(prev => {
      let seconds = prev.seconds - 1;
      let minutes = prev.minutes;
      let hours = prev.hours;

      if(seconds < 0) {
        seconds = 59;
        minutes--;
      }

      if(minutes < 0) {
        minutes = 59;
        hours--;
      }

      if(hours < 0) {
        seconds = 0;
        minutes = 0;
        hours = 0;
        setStartTimer(false);
      }

      return {
        seconds,
        minutes,
        hours
      }
    });
  }

  return (
    <section className='h-screen w-full bg-black flex flex-col justify-center items-center'>
      <p className='text-white font-mono text-5xl'>Counting-Timer</p>
      <Board time={time}/>
      <InputContainer 
        handleChangeHour={handleChangeHour}
        handleChangeMinute={handleChangeMinute}
        handleChangeSecond={handleChangeSecond}
        handleCountdown={handleCountdown}
      />
    </section>
  )
}

export default App
