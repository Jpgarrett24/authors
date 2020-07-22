import React from "react";
import { navigate } from "@reach/router";

const EditButton = (props) => {
    const { authorID } = props;

    const editClicked = (event) => {
        navigate(`/authors/edit/${authorID}`);
    }

    return (
        <>
            <button onClick={editClicked}>Edit</button>
        </>
    )
}

export default EditButton;