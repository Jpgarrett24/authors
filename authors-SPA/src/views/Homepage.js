import React, { useEffect } from "react";
import { Link } from "@reach/router";
import AuthorsTable from "../components/AuthorsTable";
import axios from "axios";

const Homepage = (props) => {
    const { authors, setAuthors } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                setAuthors(res.data.sort((a, b) => {
                    if (a.name < b.name) { return -1 };
                    return (a.name > b.name ? 1 : 0);
                }));
            })
            .catch((err) => { console.log(err); })
    }, [setAuthors]);

    return (
        <>
            <Link to="/authors/new">Add an author</Link>
            <h4>We have quotes by:</h4>
            <AuthorsTable authors={authors} setAuthors={setAuthors} />
        </>
    )
};

export default Homepage;