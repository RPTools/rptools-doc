
import React, { FunctionComponent } from 'react';

interface BlogPostLinkProps {
    name: string;
    linkName: string;
}

export const BlogPostLink: FunctionComponent<BlogPostLinkProps> = ({name, linkName}) => (
    <div className="blog-post-link">
        More Information: <a href={`../../blog/${linkName}`}>{name}</a>
    </div>
);