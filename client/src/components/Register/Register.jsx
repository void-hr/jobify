import styles from './register.module.css'
const Register = () => {
  return (
    <div className={styles.register}>
        <div className={styles.register_form_container}>
        <div className={styles.register_form}>

            <h1>Create an account</h1> 
            <h6>Your personal job finder is here</h6>

            <input type="text" name="name" id="" placeholder="Name" />
            <input type="text" name="email" id="" placeholder="Email" />
            <input type="text" name="mobile" id="" placeholder="Mobile" />
            <input type="text" name="password" id="" placeholder="Password" />

            <span>
            <input type="checkbox" name="isCheck" id="" />
            <p>By creating an account, I agree to our terms of use and privacy policy</p>
            </span>

            <button>Create Account</button>
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