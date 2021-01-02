import React from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Navbar() {
    return (
        <div>
            <header>
                <h2>Employee Directory</h2>
                <h5>Click on carrots to filter by heading or use the search box to narrow your results.</h5>
            </header>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="search mr-sm-2" />
            </Form>
        </div>
    )
};



export default Navbar;