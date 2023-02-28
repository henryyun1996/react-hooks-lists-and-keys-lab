import React from "react";

function ProjectItem({ name, about, technologies }) {

  console.log(technologies);

  const span = technologies.map((technology) => {
    return (
      <span>{technology}</span>
    )
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {span}
      </div>
    </div>
  );
}

export default ProjectItem;
