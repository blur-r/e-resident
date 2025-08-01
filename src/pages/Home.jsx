import Hero from "../components/Hero"
import Preference from "../components/Preference"
import Featured from "../components/Featured"
import FeaturedPptForSaleOrRent from "../components/FeaturedPpt4SaleOrRent"
import Reviews from "../components/Reviews"

export default function Home() {
    return (
        <>
            <Hero />
            <Preference />
            {/* <Featured /> */}
            <FeaturedPptForSaleOrRent type={"Rent"} />
            <FeaturedPptForSaleOrRent type={"Sale"} />
            <Reviews />
        </>
    )
}