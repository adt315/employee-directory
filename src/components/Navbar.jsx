import React from "react";
import Search from "./Search";

function Navbar() {
    return (
        <div>
            <header>
                <h2>Employee Directory</h2>
                <h5>Click on carrots to filter by heading or use the search box to narrow your results.</h5>
            </header> 
            <Search />
        </div>     
    )
};

export default Navbar;