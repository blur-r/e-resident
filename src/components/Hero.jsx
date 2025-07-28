import Navbar from "./Navigation"

function Hero() {

    return (
        <div className="hero">
            <Navbar />

            <div className="hero-content">
                <h1>
                    Welcome to Your Dream<br /> Home
                </h1>

                <p>Unlock the door to luxury living with our exclusive leasing, short-term rentals,
                    and sales services.</p>

                <button>Find Your Perfect Home</button>

            </div>
        </div>
    )

}

export default Hero 