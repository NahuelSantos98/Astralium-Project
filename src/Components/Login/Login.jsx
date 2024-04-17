import './Login.css'
import { useState } from 'react'
import { appFirebase } from '../../services/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
const auth = getAuth(appFirebase)

const Login = () => {
    const [registerUser, setRegisterUser] = useState(false)
  
    const {register, handleSubmit, formState: {errors}} = useForm();

    const functAuthentication = async(data) =>{
    const {email, password} = data

        if(registerUser) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("The email is already in use");
            }
        }
        
        }else{
            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (error) {
                alert("Email or Password are incorrect")
            }
        }
    }

    return (
        <div className='formLoginContainerTotal'>
            <div className='formContainerLogin'>
                {registerUser ? <h2>Sign in</h2> : <h2>Log in</h2>}
                <form onSubmit={ handleSubmit((data)=>{
                    functAuthentication(data)
                })}>
                    <input type='text' placeholder='Email' id='email' {...register("email", {required: 'Email is required', pattern: {
                        value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message : "The pattern for the email is incorrect"
                    } })}/>
                    {errors.email && <p className='errorsLogin'>{errors.email.message}</p>}
                    <input type='password' placeholder='Password' id='password' {...register("password", 
                    { required: 'Password is required', 
                        minLength: {
                            value: 6, 
                            message : "The password must have more than 4 characters"
                        },
                    })}     />
                    {errors.password && <p className='errorsLogin'>{errors.password.message}</p>}
                    <button>{registerUser ? "Sign in" : "Log in"}</button>
                </form>
                <h4>{registerUser? "If you have an account" : "You don't have an account"} <button onClick={()=>setRegisterUser(!registerUser)}>{registerUser? "Log in" : "Sign In"}</button></h4>
            </div>
        </div>
    )
}

export default Login
