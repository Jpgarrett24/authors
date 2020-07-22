import React from "react";
import { Link } from "@reach/router";
import Form from "../components/Form";

const EditAuthor = (props) => {
    return (
        <>
            <Link to="/">Home</Link>
            <h4>Edit this author:</h4>
            <Form action="update" authorID={props._id} />
        </>
    )
}

export default EditAuthor;