import React, { useState } from 'react';
import Project from './Project';
import projectsData from './Data/project';

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [activeNav, setactiveNav] = useState("all");

    const handleFilterCategory = (name) => {
        const newProjects = projectsData.filter(project => {
            return project.category.includes(name);
        });
        setProjects(newProjects);
        setactiveNav(name);
    }

    return (
        <div className="projects content__section">
            <ul className="projects__navbar">
                <li className={activeNav === "all" ? "projects__navbar--active": ""} onClick={() => {
                    setProjects(projectsData);
                    setactiveNav("all");
                }}>All</li>
                <li 
                    className={activeNav === "html-css-javascript" ? "projects__navbar--active": ""} 
                    onClick={() => handleFilterCategory("html-css-javascript")}>
                    Html/Css/Javascript
                </li>
                <li 
                    className={activeNav === "reactjs" ? "projects__navbar--active": ""} 
                    onClick={() => handleFilterCategory("reactjs")}>
                    ReactJS
                </li>
            </ul>
            <div className="container projects__container">
                <div className="row">
                    {projects.map((project, index) => (
                        <Project key={index} project={project}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
