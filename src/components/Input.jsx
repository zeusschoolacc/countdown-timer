import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const Input = ({clear, name, onType}) => {
    const MAX = (name === 'Hours') ? 99 : 60
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if(clear && inputRef) {
            setValue('');
        }
    }, [clear, inputRef]);

    const handleChange = (e) => {
        onType();
        if(e.target.value <= MAX) {
            setValue(e.target.value);
        }
    }

  return (
    <div className="flex flex-col items-center">
        <input 
            type="text" 
            name={name}
            className="bg-gray-100 h-12 w-24 rounded-lg text-black text-3xl text-center font-digital" 
            placeholder="00"
            value={value}
            onChange={handleChange}
        />
        <p>{name}</p>
    </div>
  )
}

export default Input