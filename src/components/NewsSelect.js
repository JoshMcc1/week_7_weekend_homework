import React from "react";

const NewsSelect = ({ newsSections, onSectionSelected }) => {
    const handleSelect = (event) => {
        const chosenSection = newsSections[event.target.value]
        onSectionSelected(chosenSection);
    }

    const getNewsSections = newsSections.map((section, index) => {
        return <option key={index} value={index}>{section.name}</option>
    })
    return (
        <>
            <select onChange={handleSelect}>
                {getNewsSections}
            </select>
        </>
    );
};

export default NewsSelect;