import React from "react";

const NewsDetails = ({ article }) => {
    return (
        <>
            <h2><a href={article.webUrl} target="_blank">Article Title: {article.webTitle}</a></h2>
            <p>Section: {article.sectionName}</p>
            <p>Date Published: {article.webPublicationDate}</p>

        </>
    );
};

export default NewsDetails;