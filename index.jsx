import React from 'react';
import ReactDOM from 'react-dom';

import '@telia/styleguide/index.css';

import Article from './article';
import { Container } from '@telia/styleguide';

const App = () => (
    <Container>
        <Article title="My awesome article" tags={[ 'article', 'about', 'stuff' ]}>
            Here we can put the content of an article
            <p style={{ color: 'green' }}>Nested elements are also OK</p>
        </Article>
        <Article title="My awesome article" tags={[ 'article', 'about', 'stuff' ]}>
            Here we can put the content of an article
            <p style={{ color: 'green' }}>Nested elements are also OK</p>
        </Article>
    </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));