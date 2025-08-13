function ProfileSettings() {
    return (
        <div className="profile-settings">

            <i className="fas fa-arrow-left"></i>

            <div className="profile-header">
                <div className="profile-photo">
                    <img src="/images/bgImg.png" alt="Profile" />
                    <i class="fas fa-pen"></i>
                </div>
                <h2>Bamidele Christopher</h2>
            </div>

            <h3>Personal Informations</h3>
            <section className="card">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Other Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="+234" />
                <input type="text" placeholder="Gender" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Date of Birth: DD/MM/YY" />
            </section>

            <h3>Account Settings</h3>
            <section className="card">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="text" placeholder="Language" />
                <div className="account-status">
                    <span>Account Status</span>
                    <span className="active">Active</span>
                </div>
            </section>

            <h3>Notification Preferences</h3>
            <section className="card notification-pref">
                <div className="toggle-item">
                    <span>Email Alerts</span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div>
                <div className="toggle-item">
                    <span>SMS Alerts</span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div>
                <div className="toggle-item">
                    <span>Newsletter Subscription</span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div>
            </section>

            <h3>Billing & Payments</h3>
            <section className="card">
                <button className="link-btn">Payment Methods</button>
                <button className="link-btn">Transaction History</button>
            </section>

            <h3>Company</h3>
            <section className="card">
                <button className="link-btn">Help Center Access</button>
                <button className="link-btn">Privacy Policy</button>
                <button className="link-btn">Report a Problem</button>
                <button className="logout">Logout</button>
            </section>
        </div>
    );
};

export default ProfileSettings;
