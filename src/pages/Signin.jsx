import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Signin() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    return (
        <div className="signin">
            <div className="signin-img-container">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                </Link>

            </div>

            <div className="signin-form">
                <h2>Sign in</h2>
                <form HTMLfor>
                    <div class="form-group">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div class="form-group password-container">
                        {/* <input type="password" placeholder="Password" required /> */}
                        {/* <span class="password-toggle">👁️</span> */}
                        <input
                            type={showPassword ? "text" : "password"} // toggles visibility
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            class="password-toggle">
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </span>
                    </div>
                    <a href="#" class="fogot-password">Forgot Password?</a>
                    <button type="submit" class="signup-btn">Login</button>
                    <a href="#" className="no-account">Don't have an account? <span>Sign Up Instead!</span> </a>
                    <div class="or-line">
                        <hr /><span>or</span><hr />
                    </div>
                    <div class="social-btn google-btn">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
                        Continue with Google
                    </div>
                    <div class="social-btn facebook-btn">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
                        Continue with Facebook
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signin