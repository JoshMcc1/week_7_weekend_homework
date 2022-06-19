import React from "react";

const NewsListItem = ({ article, onArticleClicked }) => {
    const handleClick = () => {
        onArticleClicked(article)
    }
    return (
        <>
            <li onClick={handleClick}>{article.webTitle}</li>
        </>
    );
};

export default NewsListItem;