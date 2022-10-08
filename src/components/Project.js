import React from "react";

function Project(props) {
  return (
    <div>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project) => (
          <div className="column is-half">
            <div className="card ml-2 mr-2 hvrImg">
              <div className="card-image">
                <figure className="image is-4by3">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img src={ process.env.PUBLIC_URL + project.image }  alt="Placeholder"/>
                  </a>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4 is-underlined" key={project.id}>
                      {project.title}
                    </p>
                  </div>
                </div>

                <div className="content has-text-left">
                  {project.description}
                  <br />
                  <br />
                  <div className="card">
                    <footer className="card-footer has-background-dark has-text-white">
                      <a
                        href={project.repo}
                        className="card-footer-item has-background-dark has-text-white has-text-weight-bold"
                        target="_blank" rel="noreferrer"
                      >
                        Github Repository
                      </a>
                      <br />
                      <a
                        href={project.live}
                        className="card-footer-item has-background-dark has-text-white has-text-weight-bold"
                        target="_blank" rel="noreferrer"
                      >
                        Live Site
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
