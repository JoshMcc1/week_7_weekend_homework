import React from "react";
import NewsListItem from "./NewsListItem";

const NewsList = ({ newsArticles, onArticleClicked }) => {
    const realNewsArtiicles = newsArticles.map((article, index) => {
        return <NewsListItem key={index} article={article} onArticleClicked={onArticleClicked} />
    })

    return (
        <>
            <ul>
                {realNewsArtiicles}
            </ul>
        </>
    );
};

export default NewsList