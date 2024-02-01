import { useState } from 'react';
import styles from './register.module.css'
import { useNavigate } from 'react-router-dom';
import { register } from '../../apis/auth';
const Register = () => {
  
  const [ formData, setFormData] = useState({});
  const navigate = useNavigate();
    const response = async() => {
       const response =  await register(formData)
        if(response.data.token)
        {
          navigate('/');
        }
    }
    
    const handleSignUp =  (e) => {
      e.preventDefault();
      response();
    }
  
    const handleChange = (e) => {
      setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
  return (
    <div className={styles.register}>
        <div className={styles.register_form_container}>
        <div className={styles.register_form}>
            <div>
            <h1>Create an account</h1> 
            <h6>Your personal job finder is here</h6>
            </div>
            <input type="text" name="username" id="" placeholder="Name" onChange={handleChange}/>
            <input type="text" name="email" id="" placeholder="Email" onChange={handleChange}/>
            <input type="text" name="contact" id="" placeholder="Mobile" onChange={handleChange}/>
            <input type="password" name="password" id="" placeholder="Password" onChange={handleChange}/>

            <span>
            <input type="checkbox" name="isCheck" id="" />
            <p>By creating an account, I agree to our terms of use and privacy policy</p>
            </span>

            <button onClick={handleSignUp}>Create Account</button>
            <span>
            <h6>Already have an account?</h6>
            <a href="/login" role="button" type='submit'>Sing In</a>
            </span>

        </div>
        </div>
        <div className={styles.image_wall}>
            <h1>Your Personal Job Finder</h1>
        </div>
    </div>
  )
}

export default Register