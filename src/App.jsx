import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Buy from "./pages/Buy";
import Shortlet from "./pages/Shortlet";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rent" element={<Rent />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/shortlet" element={<Shortlet />} />
            </Routes>

        </>
    )
}

export default App