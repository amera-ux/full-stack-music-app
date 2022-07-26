import React, {useState,useContext} from 'react';
import { FirebaseContext } from '../../context/FirebaseContext';
import "./SignUpForm.css"

//3. First we want to get the firebase context here


const SignUpForm =() =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //here we use the firebase value for signing up people
    //Next lines 20 to 23
    const {firebase} = useContext(FirebaseContext);
   
    return (
        <div className="container">
            <form onSubmit ={(e) => {
                e.preventDefault();
                firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => alert("signed up!"))
                .catch((error) => alert(error.message));    
                 
                 setEmail("")
                 setPassword("")
                }}>
            <label>email:</label>
              <input  type="email" value={email} 
              onChange={(e) =>setEmail(e.target.value)}></input>
              <label>password:</label>
              <input type="password" value={password} 
              onChange={(e) =>setPassword(e.target.value)} ></input>  
              <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm;