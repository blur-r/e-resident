function PropertyCard() {
    return (
        <div class="property-card">
            <div class="image-container">
                <img src="/images/bgImg.png" alt="Luxury 3 Bedroom Detached Duplex" />
                <div class="image-overlay">
                    <button class="nav-button left">&lt;</button>
                    <button class="nav-button right">&gt;</button>
                </div>
            </div>
            <div class="details">
                <h3>Luxury 3 Bedroom Detached Duplex</h3>
                <p className="rent">Rent: N1,500,000/Annum</p>
                <p className="location">Location: Lagos</p>
            </div>
        </div>
    )
}

export default PropertyCard