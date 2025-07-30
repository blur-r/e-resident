function Preference() {
    return (
        <>
            <div className="preference">
                <h1>Fix to Preference</h1>
                <div className="search-bar">
                    {/* <i className="fas fa-search"></i> */}
                    <i className="fas fa-magnifying-glass"></i>
                    <input type="text" placeholder="Enter address or City" />
                    <button>Search</button>
                </div>

                <div class="filters">
                    <input type="number" placeholder="Min Price" />
                    <input type="number" placeholder="Max Price" />
                    <select>
                        <option value="">Category</option>
                    </select>
                    <select>
                        <option value="">No of Rooms</option>
                    </select>
                </div>


            </div>
        </>

    )
}

export default Preference