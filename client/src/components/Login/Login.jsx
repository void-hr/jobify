import styles from './login.module.css'
const Login = () => {
  return (
    <div className={styles.login}>
    <div className={styles.login_form_container}>
    <div className={styles.login_form}>
        <div>
        <h1>Already Have an Account ?</h1> 
        <h6>Your personal job finder is here</h6>
        </div>
        <input type="text" name="email" id="" placeholder="Email" />
        <input type="text" name="password" id="" placeholder="Password" />

        <button>Sign In</button>
        <span>
        <h6>Don't have an account?</h6>
        <a href="/register" role="button" type='submit'>Sing Up</a>
        </span>

    </div>
    </div>
    <div className={styles.image_wall}>
        <h1>Your Personal Job Finder</h1>
    </div>
</div>
  )
}

export default Login