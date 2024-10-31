import './SignUp.css'

function SignUp(){
    return(
        <div className="signup-container">
        <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify Logo"/>
        </div>
        <h1>Sign Up for Spotify</h1>
        <form className="signup-form">
            <input type="email" placeholder="Email address" required/>
            <input type="text" placeholder="Name" required/>
            <input type="password" placeholder="Password" required/>
            <input type="password" placeholder="Repeat Password" required/>
            <button type="submit">Sign Up</button>
        </form>
        <div className="divider">
            <span>Already have an account?</span>
        </div>
        <button className="login-button">Log in to Spotify</button>
    </div>
    )
}

export default SignUp