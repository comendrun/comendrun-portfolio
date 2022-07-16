import React, { useState } from "react";
import Project from "./Project";
import { useFetch } from "../hooks/useFetch";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

export default function Projects() {
  // const [url, setUrl] = useState(
  //   "https://my-json-server.typicode.com/comendrun/comendrun.github.io/db"
  // );
  const { data, isPending, error } = useFetch("./db.json");

  // React.useEffect(() => {
  //   fetch("./db.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.projects));
  // }, []);

  const mappingThroughProjects = () => {
    if (data) {
      const orderedByLatestFirst = data.projects.sort((a, b) =>
        a.id > b.id ? -1 : 1
      );
      return orderedByLatestFirst.map((project) => {
        return (
          <Project
            key={nanoid()}
            name={project.title}
            id={project.id}
            live={project.links.live}
            about={project.about}
            mobImage={project.images.mobile}
            icons={project.tech.map((each) => {
              return (
                <i
                  title={each.name}
                  key={nanoid()}
                  className={`${each.display} icons`}
                ></i>
              );
            })}
          />
        );
      });
    }
  };

  return (
    <div className="portfolio">
      {error && <p>{error}</p>}
      {isPending && <p>Loading ...</p>}
      {mappingThroughProjects()}
    </div>
  );
}
