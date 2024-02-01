import {  useState } from 'react'
import styles from './login.module.css'
import { login } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [ formData, setFormData] = useState({});
const navigate = useNavigate();
  const response = async() => {
     const response =  await login(formData)
      if(response.data?.token && response.data?.name)
      {
        localStorage.setItem('token', response?.data?.token)
        localStorage.setItem('user', response?.data?.name)
        navigate('/');
      }
  }
  
  const handleSignIn =  (e) => {
    e.preventDefault();
    response();
  }

  const handleChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <div className={styles.login}>
    <form className={styles.login_form_container}>
    <div className={styles.login_form}>
        <div>
        <h1>Already Have an Account ?</h1> 
        <h6>Your personal job finder is here</h6>
        </div>
        <input type="text" name="email"  placeholder="Email" onChange={handleChange} />
        <input type="password" name="password"  placeholder="Password" onChange={handleChange}/>

        <button onClick={handleSignIn}>Sign In</button>
        <span>
        <h6>Don't have an account?</h6>
        <a href="/register" role="button" type='submit'>Sing Up</a>
        </span>

    </div>
    </form>
    <div className={styles.image_wall}>
        <h1>Your Personal Job Finder</h1>
    </div>
</div>
  )
}

export default Login