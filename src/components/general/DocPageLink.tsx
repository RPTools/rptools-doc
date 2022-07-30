
import React, { FunctionComponent } from 'react';

interface DocPageLinkProps {
    name: string;
    linkName: string;
}

export const DocPageLink: FunctionComponent<DocPageLinkProps> = ({name, linkName}) => (
    <div className="doc-page-link">
        More Information: <a href={`../../docs/${linkName}`}>{name}</a>
    </div>
);