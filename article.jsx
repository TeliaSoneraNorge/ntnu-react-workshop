import React from 'react';
import { Heading, Tags, ShadowBox, Button } from '@telia/styleguide';

const Article = ({ title, tags, children }) => (
    <ShadowBox>
        <Heading level={1}>{title}</Heading>
        <Tags color="dark-grey">{tags.map(tag => <Tags.Tag key={tag}>{tag}</Tags.Tag>)}</Tags>
        <div>
            {children}
        </div>
        <Button text="Read more" />
    </ShadowBox>
);

export default Article;