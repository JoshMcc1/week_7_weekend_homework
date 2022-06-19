import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import Title from '../components/Title';
import NewsSelect from '../components/NewsSelect';
import NewsDetails from '../components/NewsDetails';
import NewNewsSectionForm from '../components/NewNewsSectionForm';

const NewsContainer = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [newsSections, setNewsSections] = useState([
        { name: "Politics", url: "https://content.guardianapis.com/search?q=Politics&format=json&api-key=test" },
        { name: "Sports", url: "https://content.guardianapis.com/search?q=Sports&format=json&api-key=test" },
        { name: "Science", url: "https://content.guardianapis.com/search?q=Science&format=json&api-key=test" },
        { name: "Climate", url: "https://content.guardianapis.com/search?q=Climate&format=json&api-key=test" },
        { name: "Arts", url: "https://content.guardianapis.com/search?q=Arts&format=json&api-key=test" },
        { name: "Brexit", url: "https://content.guardianapis.com/search?q=brexit&format=json&api-key=test" },
        { name: "Tech", url: "https://content.guardianapis.com/search?q=Tech&format=json&api-key=test" }
    ])
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const addToNewsSections = (section) => {
        const sectionsCopy = [...newsSections, section];
        setNewsSections(sectionsCopy);

    }

    useEffect(() => { fetchNews() }, []);

    const fetchNews = (url) => {
        fetch(url).then(res => res.json()).then(newsArticles => setNewsArticles(newsArticles.response.results)).catch(ex => console.log(ex));
    }

    const onSectionSelected = (section) => {
        setSelectedSection(section);
        fetchNews(section.url);
    }

    const onArticleClicked = (article) => {
        setSelectedArticle(article);
    }
    return (
        <div className='releases-box'>
            <Title title={selectedSection ? selectedSection.name : ""} />
            <NewsSelect newsSections={newsSections} onSectionSelected={onSectionSelected} />
            {selectedSection ? <NewsList newsArticles={newsArticles} onArticleClicked={onArticleClicked} /> : null}
            {selectedArticle ? <NewsDetails article={selectedArticle} /> : null}
            <NewNewsSectionForm addToNewsSections={addToNewsSections} />
        </div>
    );
};

export default NewsContainer;