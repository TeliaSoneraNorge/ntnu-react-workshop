import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import '@telia/styleguide/index.css';

import Article from './article';
import { Container, ModalDialogProvider, ModalDialog, Button } from '@telia/styleguide';

const ArticleDialog = ({ onSubmit }) => (
    <ModalDialog onSubmit={onSubmit} heading="Article" submitText="Well, OK">
        Sorry, nothing's gonna be shown here
    </ModalDialog>
);

const App = () => {
    const [displayArticle, setDisplayArticle] = useState(false);
    const [loadingArticles, setLoadingArticles] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [articles, setArticles] = useState([]);

    const initialFetchEffect = useEffect(() => {
        setLoadingArticles(true);
        fetch(`//workshop-blog.s3-website-eu-west-1.amazonaws.com/blog/${currentPage}.json`)
        .then((res) => res.json())
        .then(({ posts }) => {
            setArticles(posts)
            setLoadingArticles(false);
        });
    }, [currentPage])

    return (
        <Container>
            {loadingArticles ? "Loading articles..." : articles.map(({ title, tags, blurb}) =>
                <Article onOpen={() => setDisplayArticle(true)} title={title} tags={tags}>
                    {blurb}
                </Article>)}
            {displayArticle && <ArticleDialog onSubmit={() => setDisplayArticle(false)} />}
            <Button isDisabled={currentPage === 1} onClick={() => setCurrentPage(currentPage-1)} text="Previous" />
            <Button isDisabled={currentPage >= 2} onClick={() => setCurrentPage(currentPage+1)} text="Next" />
        </Container>
    );
}

ReactDOM.render(
    <ModalDialogProvider>
        <App />
    </ModalDialogProvider>,
    document.getElementById('app'));