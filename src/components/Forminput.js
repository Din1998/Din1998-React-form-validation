import '../components/forminput.css'

function FormInput (props) {
  return(
    <div className="input">
      <label>User Name</label>
      <input 
      name={props.name}
        placeholder={props.placeholder}
         />
    </div>
  )
}

export default FormInput;