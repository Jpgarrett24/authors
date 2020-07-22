import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Router } from "@reach/router";
import './App.css';
import Homepage from './views/Homepage';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';
// authors

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then((res) => { setAuthors(res.data) })
      .catch((err) => { console.log(err); })
  }, [])

  return (
    <>
      <h1>Favorite Authors</h1>
      <Router>
        <Homepage path="/" authors={authors} setAuthors={setAuthors} />
        <AddAuthor path="/authors/new" />
        <EditAuthor path="/authors/edit/:_id" />
      </Router>
    </>
  );
}

export default App;
