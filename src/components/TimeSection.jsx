// eslint-disable-next-line react/prop-types
export const TimeSection = ({time}) => {
  return (
    <div className="flex">
        <p className="w-[4.5rem] text-end">{Math.floor(time / 10)}</p>
        <p className="w-[4.5rem] text-end">{time % 10}</p>
    </div>
  )
}
