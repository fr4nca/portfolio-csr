import React from "react";
import "./RepoItem.css";

export default function RepoItem({
  id,
  name,
  createdAt,
  updatedAt,
  url,
  description,
  primaryLanguage,
  owner
}) {
  return (
    <div className="repo-item bg-darker">
      <div className="repo-header">{name}</div>
      <div className="repo-content">
        {description ? <span>Descrição: {description}</span> : null}
        {primaryLanguage ? <span>Language: {primaryLanguage.name}</span> : null}
        <span> Created at: {createdAt}</span>
        <span> Last updated: {updatedAt}</span>
        <a className="btn" href={url}>
          Github
        </a>
      </div>
    </div>
  );
}
