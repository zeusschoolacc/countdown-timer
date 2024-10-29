import { useEffect, useState } from "react";
import Input from "./Input"


// eslint-disable-next-line react/prop-types
const InputContainer = ({handleChangeHour, handleChangeMinute, handleChangeSecond, handleCountdown}) => {
    const [startTimer, setStartTimer] = useState(false);
    const [clear, setClear] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleCountdown(setStartTimer);
        }, 1000);

        if(!startTimer) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [startTimer, handleCountdown]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setStartTimer(false);
        setClear(true);
        

        const data = new FormData(e.currentTarget);

        const hours = data.get("Hours");
        const minutes = data.get("Minutes");
        const seconds = data.get("Seconds");

        handleChangeHour(hours != '' ? hours : 0); 
        handleChangeMinute(minutes != '' ? minutes : 0);
        handleChangeSecond(seconds != '' ? seconds : 0);

        setStartTimer(true);
    }

    const onType = () => {
        setClear(false);
    }

  return (
    <form 
        className="max-w-lg w-full bg-white rounded-lg flex flex-col items-center py-6 gap-4" 
        onSubmit={handleSubmit}
    >
        <p className="text-lg font-mono">Input Time:</p>
        <div className="flex justify-evenly w-full">
            <Input clear={clear} onType={onType} name={'Hours'}/>
            <Input clear={clear} onType={onType} name={'Minutes'}/>
            <Input clear={clear} onType={onType} name={'Seconds'}/>
        </div>
        <button className="px-4 py-2 bg-red-500 rounded-3xl text-white font-mono">Start Timer</button>
    </form>
  )
}

export default InputContainer