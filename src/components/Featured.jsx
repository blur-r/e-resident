import PropertyCard from "./PptCard"

function Featured() {
    return (
        <div className="featured">
            <div className="featured-ppt-info">
                <h1>Featured Properties</h1>
                <p>Discover our selection of the most attract-ive apartments and houses available
                    for leasing, short-term rental,
                    and sale.</p>
            </div>

            <div className="featured-ppt-card">
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </div>

        </div>
    )
}

export default Featured