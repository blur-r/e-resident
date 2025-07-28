function Navbar() {

    function toggleMenu() {
        const navLinks = document.getElementById("nav-links");
        navLinks.classList.toggle("active");
        console.log("clicked")
    }

    return (
        <div className="nav">
            <nav className="navbar">
                <div className="logo">
                    <a href="#home"><img src="" alt="" />LOGO</a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
                <ul className="nav-links show-menu" id="nav-links">
                    <li><a className="nav-link" href="#home">HOME</a></li>
                    <li><a className="nav-link" href="#about">BUY</a></li>
                    <li><a className="nav-link" href="#service">RENT</a></li>
                    <li><a className="nav-link" href="#gallery">SHORTLET</a></li>
                    <div className="sign">
                        <button className="sign-up"><a href="">Sign up</a></button>
                        <button className="sign-in"><a href="">Log in</a></button>
                    </div>

                </ul>
                <div className="sign">
                    <button className="sign-up"><a href="">Sign up</a></button>
                    <button className="sign-in"><a href="">Log in</a></button>
                </div>
            </nav>



        </div>
    )
}

export default Navbar