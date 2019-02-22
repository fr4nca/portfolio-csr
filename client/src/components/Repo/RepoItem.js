import React from "react";

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
      <div>{name}</div>
    </div>
  );
}
