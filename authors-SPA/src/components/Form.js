import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";

const Form = (props) => {
    const { action, authorID } = props;
    const [input, setInput] = useState("");
    const [errors, setErrors] = useState(null);
    const [author, setAuthor] = useState(null);

    const displayErrors = () => {
        return (
            errors && (
                <small style={{ color: 'red' }}>{errors?.name?.properties?.message}</small>
            ))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${authorID}`)
            .then((res) => {
                if (res.data.name !== undefined) {
                    setAuthor(res.data);
                    setInput(res.data.name);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [authorID])

    const handleSubmit = (event) => {
        event.preventDefault();

        const newAuthor = {
            name: input,
        };

        if (action === "create") {
            axios.post('http://localhost:8000/api/authors', newAuthor)
                .then((res) => {
                    navigate('/');
                })
                .catch((err) => { setErrors(err.response.data.errors) });

            setInput("");
        }

        if (action === "update") {
            axios.put(`http://localhost:8000/api/authors/${authorID}`, newAuthor)
                .then((res) => { navigate('/') })
                .catch((err) => { setErrors(err.response.data.errors) });

            setInput('')
        };
    }

    if (!author && action === "update") {
        return (
            <>
                <h4 style={{ color: "red" }}>Your selected author either doesn't exist, or hasn't written anything good yet.</h4>
                <p>If you would like to add them, please <Link to="/authors/new">Click here!</Link></p>
            </>
        )
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label> {displayErrors()}
                <input type="text" name="name" id="name" value={input} onChange={(event) => setInput(event.target.value)} />
                <button type="button" onClick={(event) => navigate('/')}>Cancel</button>
                <button>Submit</button>
            </form>
        </>
    )
};

export default Form;