/* eslint-disable react/prop-types */
import { TimeSection } from "./TimeSection"

const Board = ({time}) => {
    
  return (
    <div className="flex gap-2 text-[10rem] font-digital text-red-500 select-none">
        <TimeSection time={time.hours}/>
        <p>:</p>
        <TimeSection time={time.minutes}/>
        <p>:</p>
        <TimeSection time={time.seconds}/>
    </div>
  )
}

export default Board