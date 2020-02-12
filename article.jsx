import React from 'react';

const Article = ({ title, tags, children }) => (
    <article>
        <h2>{title}</h2>
        <p>{tags.join(', ')}</p>
        <div>
            {children}
        </div>
        <hr />
    </article>
);

export default Article;