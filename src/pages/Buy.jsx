import Navbar from "../components/Navigation"
import PropertyCard from "../components/PptCard"
import Footer from "../components/Footer"

function Buy() {
    return (
        <div className="rent">
            <div className="rent-hero">
                <Navbar />
                <h1 className="rent-h1">Featured Properties for Sale</h1>
                <div className="search-bar">
                    <i className="fas fa-magnifying-glass"></i>
                    <input type="text" placeholder="Enter address or City" />
                    <button>Search</button>
                </div>
                <div className="properties">
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                </div>
                <p className="see-more">See more</p>

                <h1 className="similar">Similar Properties for Rent</h1>
                <div className="similar-ppt">
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                </div>

                <Footer />
            </div>

        </div>
    )
}

export default Buy