import Navbar from "../components/Navigation"

function ProductDetailPage() {
    return (
        <div className="pdp">
            <div className="pdp-hero">
                <Navbar />
                <h1 className="rent-h1">Featured Properties for Rent</h1>
                <div className="search-bar">
                    <i className="fas fa-magnifying-glass"></i>
                    <input type="text" placeholder="Enter address or City" />
                    <button>Search</button>
                </div>
            </div>

            <div className="main-content">
                <div className="breadcrumb">
                    <div> Home</div>
                    <div> &gt; </div>
                    <div>Featured Properties for sale</div>
                    <div> &gt; </div>
                    <div>Luxury 3 Bedroom Detached Duplex </div>
                </div>

                <h1 className="lux">Luxury 3 Bedroom Detached Duplex</h1>
                <h2 className="short">Shortlet: ₦150,000/Day</h2>

                <div className="pdp-detail-img">
                    <div className="pdp-img">
                        <img src="" alt="" />
                    </div>
                    <div className="pdp-detail">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetailPage