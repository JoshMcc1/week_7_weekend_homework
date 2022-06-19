import React, { useState } from "react";

const NewNewsSectionForm = ({ addToNewsSections }) => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const handleName = (event) => {
        setName(event.target.value)
        setUrl("https://content.guardianapis.com/search?q=" + event.target.value + "&format=json&api-key=test")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newName = name.trim();
        const newUrl = url.trim();
        if (!newName || !newUrl) {
            return
        }

        const newSection = { name: newName, url: newUrl };
        addToNewsSections(newSection);

        setName("");
        setUrl("");
    }

    return (
        <>
            <h2>Enter a News section to add to the drop down list</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input required type="text" placeholder="Enter Name of News section" id="name" value={name} onChange={handleName}></input>
                <br />
                <input type="submit" value="Add to Sections"></input>
            </form>
        </>
    );
};

export default NewNewsSectionForm;