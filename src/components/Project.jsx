import React from 'react';
import githublogo from "../assests/img/githublogo.png";

const Project = ({project}) => {
    return (
        <div className="col xl-3 lg-4 md-6 sm-6 c-12 project-card">
            <figure className="project-card__wrapper">
                <a href={project.deployed_url} target="_blank" rel="noreferrer" className="project-card__link">
                    <img src={project.img} alt={project.name} className="project-card__image"/>
                </a>
                <div className="project-card__title">
                    <a href={project.github_url} target="_blank" rel="noreferrer">
                        <img src={githublogo} alt="github link" className="project-card__icon"/>
                    </a>
                    <p>{project.name}</p>
                </div>
            </figure>
        </div>
    );
}

export default Project;
