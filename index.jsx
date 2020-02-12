import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import '@telia/styleguide/index.css';

import Article from './article';
import { Container, ModalDialogProvider, ModalDialog } from '@telia/styleguide';

const ArticleDialog = ({ onSubmit }) => (
    <ModalDialog onSubmit={onSubmit} heading="Article" submitText="Well, OK">
        Sorry, nothing's gonna be shown here
    </ModalDialog>
);

const App = () => {
    const [displayArticle, setDisplayArticle] = useState(false);

    return (
        <Container>
            <Article onOpen={() => setDisplayArticle(true)} title="My awesome article" tags={[ 'article', 'about', 'stuff' ]}>
                Here we can put the content of an article
                <p style={{ color: 'green' }}>Nested elements are also OK</p>
            </Article>
            <Article onOpen={() => setDisplayArticle(true)} title="My awesome article" tags={[ 'article', 'about', 'stuff' ]}>
                Here we can put the content of an article
                <p style={{ color: 'green' }}>Nested elements are also OK</p>
            </Article>
            {displayArticle && <ArticleDialog onSubmit={() => setDisplayArticle(false)} />}
        </Container>
    );
}

ReactDOM.render(
    <ModalDialogProvider>
        <App />
    </ModalDialogProvider>,
    document.getElementById('app'));