// import PropertyCard from "./PptCard"

// function Featured() {
//     return (
//         <div className="featured">
//             <div className="featured-ppt-info">
//                 <h1>Featured Properties</h1>
//                 <p>Discover our selection of the most attract-ive apartments and houses available
//                     for leasing, short-term rental,
//                     and sale.</p>
//             </div>

//             <div className="featured-ppt-card">
//                 <PropertyCard />
//                 <PropertyCard />
//                 <PropertyCard />
//                 <PropertyCard />
//             </div>

//         </div>
//     )
// }

// export default Featured

import { useRef, useState } from "react";
import PropertyCard from "./PptCard";

export default function Featured() {
    const wrapperRef = useRef(null);

    // Initial hardcoded data (later replace with props/fetch)
    const [cards, setCards] = useState([
        { id: 1, title: "Luxury 1 Bedroom", rent: "₦5m, Lekki" },
        { id: 2, title: "Luxury 2 Bedroom", rent: "₦7m, Lekki" },
        { id: 3, title: "Luxury 3 Bedroom", rent: "₦9m, Lekki" },
        { id: 4, title: "Luxury 4 Bedroom", rent: "₦12m, Lekki" }
    ]);

    const handleSwap = (index) => {
        if (index === 0) return; // Ignore if it's already the first card

        const wrapper = wrapperRef.current;
        const cardEls = wrapper.querySelectorAll(".property-card");

        const firstEl = cardEls[0];
        const targetEl = cardEls[index];

        const rectA = firstEl.getBoundingClientRect();
        const rectB = targetEl.getBoundingClientRect();

        const cloneA = firstEl.cloneNode(true);
        const cloneB = targetEl.cloneNode(true);

        [[cloneA, rectA], [cloneB, rectB]].forEach(([clone, rect]) => {
            clone.style.position = "absolute";
            clone.style.top = rect.top + "px";
            clone.style.left = rect.left + "px";
            clone.style.width = rect.width + "px";
            clone.style.height = rect.height + "px";
            clone.style.margin = "0";
            clone.style.boxSizing = "border-box";
            clone.style.pointerEvents = "none";
            clone.style.zIndex = 1000;
            document.body.appendChild(clone);
        });

        firstEl.style.visibility = "hidden";
        targetEl.style.visibility = "hidden";

        const deltaAX = rectB.left - rectA.left;
        const deltaAY = rectB.top - rectA.top;
        const deltaBX = rectA.left - rectB.left;
        const deltaBY = rectA.top - rectB.top;

        const animA = cloneA.animate(
            [
                { transform: "translate(0,0)" },
                { transform: `translate(${deltaAX}px, ${deltaAY}px)` }
            ],
            { duration: 500, easing: "ease" }
        );
        const animB = cloneB.animate(
            [
                { transform: "translate(0,0)" },
                { transform: `translate(${deltaBX}px, ${deltaBY}px)` }
            ],
            { duration: 500, easing: "ease" }
        );

        Promise.all([animA.finished, animB.finished]).then(() => {
            const updated = [...cards];
            [updated[0], updated[index]] = [updated[index], updated[0]];
            setCards(updated);

            firstEl.style.visibility = "";
            targetEl.style.visibility = "";
            cloneA.remove();
            cloneB.remove();
        });
    };

    return (
        <div className="featured">
            <div className="featured-ppt-info">
                <h1>Featured Properties</h1>
                <p>
                    Discover our selection of the most attractive apartments and houses
                    available for leasing, short-term rental, and sale.
                </p>
            </div>

            <div className="featured-ppt-card" ref={wrapperRef}>
                {cards.map((card, idx) => (
                    <div key={card.id} onClick={() => handleSwap(idx)}>
                        <PropertyCard title={card.title} rent={card.rent} />
                    </div>
                ))}
            </div>

            {/* <div className="featured-ppt-card" ref={wrapperRef}>
                {cards.map((card, idx) => {
                    const positionClass = ["one", "two", "three", "four"][idx]; // pick based on index
                    return (
                        <div key={card.id} onClick={() => handleSwap(idx)}>
                            <PropertyCard
                                className={`property-card ${positionClass}`}
                                title={card.title}
                                rent={card.rent}
                            />
                        </div>
                    );
                })}
            </div> */}
        </div>
    );
}
