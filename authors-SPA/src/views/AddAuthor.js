import React from "react";
import { Link } from "@reach/router";
import Form from "../components/Form";

const AddAuthor = (props) => {

    return (
        <>
            <Link to="/">Home</Link>
            <h4>Add a new author:</h4>
            <Form action="create" />
        </>
    )
}

export default AddAuthor;