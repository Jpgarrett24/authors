import React from "react";
import Loading from "./Loading";
import DeleteButton from "../components/DeleteButton";
import EditButton from "./EditButton";

const AuthorsTable = (props) => {
    const { authors, setAuthors } = props;

    if (authors === []) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, idx) => {
                        return (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td><EditButton authorID={author._id} />
                                    <DeleteButton authors={authors} setAuthors={setAuthors} authorID={author._id} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default AuthorsTable;