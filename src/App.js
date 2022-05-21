import FormInput from "./components/Forminput";
import './app.css'
import { useState } from "react";

function App() {

  const [values,setValue] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:""
  })

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 charecters",
      lable:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      errorMessage:"It should be a valid email address !",
      lable:"Email",
      required: true
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      lable:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-12 characters",
      lable:"Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Password don't match",
      lable:"Confirm Password",
      pattern: values.password,
      required: true
    },
    
  ]

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

const onChange = (e) => {
  setValue({...values,[e.target.name]: e.target.value})
}

console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput 
          key={input.id} 
          {...input} 
          value={values[input.name]}
          onChange={onChange}
          />
        ))
        }
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
