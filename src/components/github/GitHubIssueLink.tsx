import React, { FunctionComponent } from 'react';


interface GitHubLinkProps {
    username: string;
    repositoryName: string;
    issueNumbers: number[];
};


export const GitHubLink: FunctionComponent<GitHubLinkProps> = ( { username, repositoryName, issueNumbers}) => (
    <div className="github-issue-link">
        <ul>
        {issueNumbers.length === 1 ? 'GitHub Issue: ' : 'GitHub Issues: '}
        {issueNumbers.map((issue) => 
            <li key={issue} >
                <a href={`https://github.com/${username}/${repositoryName}/issues/${issue}`} target="_blank">#{issue} </a>
            </li>
        )}
        </ul>
    </div>
);