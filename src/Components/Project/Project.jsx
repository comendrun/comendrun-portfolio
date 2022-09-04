import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { urlFor, client } from "../../client";

import { BsBoxArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import "./Project.scss";
import PortableTextComponent from "../PortableTextComponent/PortableTextComponent";

const Project = () => {
  const [project, setProject] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { title } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      const filteredData = data.filter((work) => work.title.includes(title));
      setProject(filteredData[0]);
    });

    setIsLoading(false);
  }, [title]);

  return (
    <section className="app__project">
      {isLoading && (
        <h1 className="app__project-loading app__flex head-text">
          Please wait...
        </h1>
      )}
      {project && (
        <div className="app__project-container">
          <div
            className="app__project-backimg"
            style={{
              backgroundImage: `url(${urlFor(project.imgUrl)})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="app__project-body-head">
              <h1 className="head-text">{project.title}</h1>
              <div className="app__project-head-desc">
                <PortableTextComponent>
                  {project.body.head}
                </PortableTextComponent>
              </div>
            </div>

            <div className="app__project-links">
              <motion.a
                href={project.projectLink}
                target="_blank"
                rel="noreferrer"
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="app__project-links-item preview"
              >
                <p>Preview Site</p>
                <BsBoxArrowUpRight />
              </motion.a>

              <motion.a
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="app__project-links-item code"
              >
                <p>View Code</p>
                <BsBoxArrowUpRight />
              </motion.a>
            </div>
          </div>

          <div className="app__project-item app__flex">
            <div className="app__project-tech-stack">
              <h2>Used technologies</h2>
              <div className="app__project-tech-stack-img-container">
                {project.techStack.map((tech, index) => (
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: "tween" }}
                    title={tech.technology}
                    className="app__project-tech-stack-img"
                  >
                    <img
                      key={`${index}-tech-stacks-${tech}`}
                      src={urlFor(tech.techIcon)}
                      alt={tech.technology}
                      className=""
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="app__project-content app__flex">
              <div className="app__project-body">
                <div className="app__project-body-overview">
                  <PortableTextComponent>
                    {project.body.overview}
                  </PortableTextComponent>
                </div>

                <div className="app__project-body-my-process">
                  <PortableTextComponent>
                    {project.body.myProcess}
                  </PortableTextComponent>
                </div>

                <div className="app__project-body-acknowledgement">
                  <PortableTextComponent>
                    {project.body.acknowledgement}
                  </PortableTextComponent>
                </div>

                {/* end of app__project-tag div ==> */}
              </div>
              {/* end of app__project-content div ==> */}
            </div>
            <div className="app__project-tags app__flex">
              {project.tags.map((tag, index) => (
                <p
                  className="app__project-tag p-text"
                  key={`${tag}-${index}-${tag}`}
                >
                  #{tag}
                </p>
              ))}
            </div>
            {/* end of app__project-item div ==> */}
          </div>
        </div>
      )}
      <motion.div
        className="app__project-return-btn"
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <Link className="app__project-return-btn-link" to="/#work">
          Return &#x23CE;
        </Link>
      </motion.div>
    </section>
  );
};

export default Project;
