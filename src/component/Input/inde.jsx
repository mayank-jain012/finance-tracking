
import './style.css'
const inde = ({placeholder,label,state,setState}) => {
  return (
    <div className='input-wrapper'>
        <p className="label-input">{label}</p>
        <input 
        placeholder={placeholder}
        onChange={(e)=>setState(e.target.value)}
        value={state}
        className='custom-input'
        />
    </div>
  )
}

export default inde