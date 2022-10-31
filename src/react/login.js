import { useState } from 'react';
import './login.css'

function Login (){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }
    const loginHandler = (event) => {
        event.preventDefault();
        // console.log(email,password)
        if(email && password) {
            props.isLogin(true);
        }
       
    }
    return(<div className="login">
        <h1>Mi</h1>
        <form onSubmit={loginHandler}>
        <label>Enter email:
<input type="text" placeholder="email" value={email} onChange={emailHandler}/>
</label>

<label>Enter password:
<input type="password" placeholder="password" value = {password} onChange={passwordHandler}/>
</label>
<button>Login</button>
</form>
    </div>);
}

export default Login; 