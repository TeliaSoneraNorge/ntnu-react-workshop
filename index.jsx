import React from 'react';
import ReactDOM from 'react-dom';

import Article from './article';

const App = () => (
    <div>
        <Article title="My awesome article" tags={[ 'article', 'about', 'stuff' ]}>
            Here we can put the content of an article
            <p style={{ color: 'green' }}>Nested elements are also OK</p>
        </Article>
        <Article title="My awesome article" tags={[ 'article', 'about', 'stuff' ]}>
            Here we can put the content of an article
            <p style={{ color: 'green' }}>Nested elements are also OK</p>
        </Article>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));