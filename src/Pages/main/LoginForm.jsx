import "./LoginForm.css"
import Navbar from "../../Components/Navbar/index";


const Login = () => {
    return (
        <>
        <div><Navbar></Navbar></div>
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box"><input type="text" placeholder="Username" required/></div>
                <div className="input-box"><input type="password" placeholder="Password" required/></div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account?<a href="/signup">Sign Up</a></p>
                </div>
            </form>
        </div>
        </>
    );
};

export default Login;