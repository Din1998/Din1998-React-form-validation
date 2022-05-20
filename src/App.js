import FormInput from "./components/Forminput";
import './app.css'
import { useState } from "react";

function App() {

  const [value,setValue] = useState({
    userName:"",
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
      lable:"Username"
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      lable:"Email"
    },
    {
      id:3,
      name:"birthday",
      type:"text",
      placeholder:"Birthday",
      lable:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      lable:"Password"
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      lable:"Confirm Password"
    },
    
  ]

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="User Name"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
