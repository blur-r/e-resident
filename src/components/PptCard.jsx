import { Link } from "react-router-dom";

function PropertyCard() {
    return (
        <Link to="/pdp">
            <div className="property-card">
                <div className="image-container">
                    <img src="/images/bgImg.png" alt="Luxury 3 Bedroom Detached Duplex" />
                    <div className="image-overlay">
                        <button className="nav-button left">&lt;</button>
                        <button className="nav-button right">&gt;</button>
                    </div>
                </div>


                <div className="details">
                    <h3>Luxury 3 Bedroom Detached Duplex</h3>
                    <p className="rent">Rent: N1,500,000/Annum</p>
                    <p className="location">Location: Lagos</p>
                </div>

            </div>
        </Link>
    )
}

export default PropertyCard