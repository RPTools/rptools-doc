import React, { FunctionComponent } from "react";

interface MTScriptFunctionProps {
  name: string;
  description?: string;
  trusted?: boolean;
  since?: string;
  parameters?: {
    name: string;
    description: string;
    optional?: boolean;
    since?: string
  }[];
  children: React.ReactNode;
}

const paramName = (name: string, optional: boolean, first: boolean) => {
  return (
    <>
      <div>{ first || ','}</div>
      <div className="mt-script-param-name">
          {optional ? '[ ' : ''}
          {name}
          {optional ? ' ]' : ''}
      </div>
    </>
  )
}

const MTScriptFunctionUsage:  FunctionComponent<{ parameters: { name: string; description: string; optional?: boolean; since?: string }[], name: string }> = ({parameters, name }) => (
  <div className="mt-script-function-usage">
    <div className="heading">Usage:</div>
    <div>
      {name}(
      {parameters && parameters.map((p, i) => paramName(p.name, p.optional, i === 0))}
      )
    </div>
  </div>
);
const MTScriptFunctionParameters:  FunctionComponent<{ parameters: { name: string; description: string; optional?: boolean; since?: string }[], name: string }> = ({parameters, name }) => (
    <div className="mt-script-function-parameters">
      <details>
        <summary>Parameters</summary>
        <ul>
          {
            parameters && parameters.map((p, i) => (
              <li key={i}>
                <div className="heading">{p.name}</div>
                <div>{p.description}</div>
              </li>
            ))
          }
        </ul>
      </details>
    </div>
);

export const MTScriptFunction: FunctionComponent<MTScriptFunctionProps> = ({ name, description, trusted, since, parameters , children}) => (
    <div className="mt-script-function">
      <div className="mt-script-function-name">{name}</div>
      <MTScriptFunctionUsage name={name} parameters={parameters} />
      { parameters?.length > 0 && <MTScriptFunctionParameters name={name} parameters={parameters} /> }
      <hr/>
      {children}
    </div>
);