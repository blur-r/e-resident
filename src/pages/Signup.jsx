function Signup() {
    return (
        <div className="signup">
            <div className="signup-img-container">
                <i className="fas fa-arrow-left"></i>
            </div>

            <div className="signup-form">
                <h2>Sign up</h2>
                <form HTMLfor>
                    <div class="form-group">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="First Name" required />
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div class="form-group password-container">
                        <input type="password" placeholder="Password" required />
                        <span class="password-toggle">👁️</span>
                    </div>
                    <a href="#" class="login-link">Have an account? Log in instead!</a>
                    <button type="submit" class="signup-btn">Sign Up</button>
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

export default Signup