import React from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Search() {
    return (
        <div>
            <Form inline style={{justifyContent:"center"}}>
                <FormControl type="text" placeholder="Search" className="search mr-sm-2" />
            </Form>
        </div>
    )
};

export default Search;