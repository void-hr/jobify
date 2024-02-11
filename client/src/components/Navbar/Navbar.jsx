import { useNavigate } from 'react-router-dom'
import ProfileImage  from '../../assets/images/profileImage.jpg'
import styles from './navbar.module.css'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate();

    const [ user, setUser ]  = useState('');

    useEffect(()=> {
      if(localStorage.getItem('user')){
        setUser(localStorage.getItem('user'))
      }
    }, [])

    const handleLogut = () => {
        localStorage.clear()
        navigate('/login')
        
    }
   
    return (
        <div className={styles.navbar}>

            <svg className={styles.pattern1} xmlns="http://www.w3.org/2000/svg" width="349" height="63" viewBox="0 0 349 63" fill="none">
                <path d="M0 0L349 63H55C24.6243 63 0 38.3757 0 8V0Z" fill="#FF6B6B" />
            </svg>

            <svg className={styles.pattern2} xmlns="http://www.w3.org/2000/svg" width="390" height="94" viewBox="0 0 390 94" fill="none">
                <path d="M0 0H390L104.665 87.75L93.015 91.4154C68.2633 99.2033 41.5584 87.5523 30.4315 64.1111L0 0Z" fill="#FF6B6B" />
            </svg>
            <svg className={styles.pattern3} xmlns="http://www.w3.org/2000/svg" width="405" height="139" viewBox="0 0 405 139" fill="none">
                <path d="M0 0H381.5L394.5 68.5L404.232 121.28C405.932 130.498 398.855 139 389.481 139H135.734C109.156 139 82.8212 133.928 58.1436 124.057C28.8646 112.346 8.53189 85.3189 5.39409 53.9409L0 0Z" fill="#FF6B6B" />
            </svg>
            <div className={styles.navbar_content}>
                <h1 className={styles.h1} onClick={() => navigate('/')}>Jobfinder</h1>
               { !user ? <div className={styles.button_container} >
                    <button className={styles.button} onClick={()=>  navigate('/login')}>Login</button>
                    <button className={styles.button} onClick={()=>  navigate('/register')}>Register</button>

                </div> :

                    <div className={styles.button_container} >
                    <a className={styles.logout} onClick={handleLogut}>Logout</a>
                    <a className={styles.user} onClick={()=>  navigate('/login')}>Hello! Recruiter</a>
                    <img src={ProfileImage} alt="image" />
                </div>
               
               }
            </div>
        </div>
    )
}

export default Navbar