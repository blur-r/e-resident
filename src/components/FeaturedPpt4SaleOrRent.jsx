import PropertyCard from "./PptCard"

function FeaturedPptForSaleOrRent({ type }) {
    return (
        <div className="featured-ppt-container">
            <div className="featured-ppt-header">
                <h1>Featured Properties for {type}</h1>
                <p>See all</p>
            </div>
            <div className="ppts">
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </div>
        </div>
    )


} export default FeaturedPptForSaleOrRent