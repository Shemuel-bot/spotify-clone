import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="login-container">
        <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify Logo"/>
        </div>
        <h1>Log in to Spotify</h1>
        <form className="login-form">
            <input type="email" placeholder="Email address or username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Log In</button>
        </form>
        <div className="additional-options">
            <label>
                <input type="checkbox"/> Remember me
            </label>
            <a href="#">Forgot your password?</a>
        </div>
        <div className="divider">
            <span>Don't have an account?</span>
        </div>
        <button className="signup-button">Sign up for Spotify</button>
    </div>
  )
}

export default App
