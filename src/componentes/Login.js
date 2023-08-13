import styles from './Login.module.css'
import Button from './button/Button'

function Login(){
    return(
        <div className={styles.log}>
                <h1>Sign In</h1>
            <form>
                    <label>E-mail address</label>
                    <input className={styles.inp} type="email"></input>
                    <label>Password</label>
                    <input className={styles.inp} type="password"></input>
                <div className={styles.box}>
                    <input type="checkbox"></input>
                    <label>Remember me</label>
                </div>               
            </form>
            <div className={styles.bnt}>
                <Button text="Submit"/>
                <p  >Forgot <a href="">password?</a></p>
            </div>
        </div>
    )
}

export default Login 