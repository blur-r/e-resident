import Navbar from "../components/Navigation"
import PropertyCard from "../components/PptCard"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";

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
                        <img src="/images/bgImg.png" alt="" />
                        <div className="pdp-image-overlay">
                            <button className="pdp-nav-button pdp-left">&lt;</button>
                            <button className="pdp-nav-button pdp-right">&gt;</button>
                        </div>
                    </div>
                    <div className="pdp-detail">
                        <div className="checkout-form">
                            <p>e-Resident</p> <p>Verified</p>
                            <form action="">
                                <input type="text" placeholder="Full Name:" />
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="Phone No:" />
                                <div className="checkbox">
                                    <input type="checkbox" name="" id="" />By ticking the box and continuing, you agree with <a href="#">e-Resident's Terms & Conditions</a>
                                </div>
                                <button type="submit"><Link to="/checkout">Checkout</Link></button>
                            </form>
                            <button type="">Make Enquries</button>
                        </div>
                        <div className="ppt-info">
                            <div>
                                <i className="fas fa-bed"></i>
                                <p>3 beds</p>
                            </div>
                            <div>
                                <i className="fas fa-bath"></i>
                                <p>3 baths</p>
                            </div>
                            <div>
                                <i className="fas fa-toilet"></i>
                                <p>3 toilet</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="description">
                    <h1>Description</h1>

                    <div className="description-container">
                        <h2>Luxury 3 Bedroom Detached Duplex – Comfort and Luxury all at the same time</h2>
                        <p className="des-location">Ikoyi, Lagos state.<br />2 Units Left</p>
                        <p className="tag">Enjoy a spacious home, comfort and luxury defined.</p>

                        <h3>Key Features:</h3>
                        <ul>
                            <li>All Rooms Ensuite – Ultimate comfort & privacy</li>
                            <li>Fully Fitted Kitchen – Modern & stylish</li>
                            <li>Boy’s Quarters (BQ) – Extra convenience</li>
                            <li>Spacious Family Lounge – Perfect for bonding moments</li>
                            <li>Luxury Finishes – Chandeliers, POP ceilings & walk-in closets</li>
                            <li>Lavish Bathrooms – Bathtubs, walk-in showers & water heaters</li>
                            <li>Ample Parking & Top Security – Peace of mind guaranteed</li>
                        </ul>

                        <h3 className="settings">This property is in the luxury settings of Ikoyi, which has all necessary facilities such as:</h3>
                        <ul>
                            <li>Good Road</li>
                            <li>Hospitals</li>
                            <li>Police station</li>
                            <li>Great schools</li>
                        </ul>
                    </div>
                </div>

                <div className="des-sub">
                    <p>Receive alerts for new properties</p>
                    <button>Subscribe</button>
                </div>

                <div className="des-similar">
                    <h1 className="des-similar-header">Similar Properties for Rent</h1>
                    <div className="des-similar-ppt">
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default ProductDetailPage