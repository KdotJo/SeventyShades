import Navbar from "../../Components/Navbar/index";



const Signup = () => {
    return (
        <>
        <div><Navbar></Navbar></div>
        <div className="wrapper">
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box"><input type="text" placeholder="Username" required/></div>
                <div className="input-box"><input type="text" placeholder="Email" required /></div>
                <div className="input-box"><input type="password" placeholder="Password" required/></div>
                <button type="submit">Sign Up</button>
                <div className="register-link">
                    <p>Already have an account?<a href="/login">Login</a></p>
                </div>
            </form>
        </div>
        
        </>
    );
};

export default Signup;