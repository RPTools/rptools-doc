
import React, { FunctionComponent } from 'react';
import { BlogPostLink } from '../general/BlogPostLink';
import { DocPageLink } from '../general/DocPageLink';
import { GitHubLink } from '../github/GitHubIssueLink';


interface RoadMapEntryProps {
    summary: string;
    completed?: boolean;
    blogPost?: {
        name: string;
        linkName: string;
    },
    docPage?: {
        name: string;
        linkName: string;
    },
    github: {
        username: string;
        repositoryName: string;
        issueNumbers: number[];
    },
    children: any
}

export const RoadMapEntry: FunctionComponent<RoadMapEntryProps> = ({ summary, blogPost, docPage, github, children, completed }) => (
    <div className="road-map-entry">
        <details>
            <summary>{summary} {completed && '✅'}</summary>
            <GitHubLink {...github} />
            <div className="road-map-entry-description">{children}</div>
            {blogPost && <BlogPostLink {...blogPost} />}
            {docPage &&  <DocPageLink {...docPage} />}
        </details>
    </div>
);
